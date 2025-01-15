const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const path = require("path");
const engine = require("ejs-mate");
const methodOverride = require("method-override");
// const ejsLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname,"/public")))
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", engine);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
// app.use(ejsLayouts);

//for setup database

main()
  .then(() => {
    console.log("i am DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sharjeel");
}

// app.get("/listings",async(req,res)=>{
//     try {
//         const newList=new Listing({
//             title:"Sharjeel",
//             description:"this is a good home",
//             image:"https://media.istockphoto.com/id/2153863369/photo/a-national-monument-in-lahore-pakistan.jpg?s=2048x2048&w=is&k=20&c=WJV1TrR4hJA05YCueIfleLfk3v4HDQPtLNQtCCnbNGI=",
//             price:120000,
//             location:"wanotianwali,Punjab",
//             country:"Pakistan"
//         })
//         await newList.save();
//         res.send(newList);
//     } catch (error) {
//         console.log(error)
//     }
// })

//all listings
app.get("/listings", async (req, res) => {
  try {
    const alllistings = await Listing.find();
    res.render("listings/index.ejs", { alllistings });
  } catch (error) {
    console.log(err);
  }
});

//for new post
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

app.post("/listings", async (req, res) => {
  // const{title,description,price,location,country}=req.body;
  // const listing=req.body.listing
  const newList = new Listing(req.body.listing);
  try {
    //     const newList= new Listing({
    //         title,
    //         description,
    //         price,
    //         location,
    //         country,
    //     })
    await newList.save();
    console.log("save new post");
    res.redirect("/listings");
  } catch (error) {
    console.log(error);
  }
});

//update route
app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;

  const alllistings = await Listing.findById(id);
  console.log(alllistings);
  res.render("listings/edit.ejs", { alllistings });
  // const{title,description,price,location,country}=req.body;
  // try {

  // } catch (error) {
  //     console.log(error)
  // }
});

app.patch("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  const { title, description, image, price, location, country } = req.body;

  try {
    const showDetail = await Listing.findByIdAndUpdate(
      id,
      { title, description, image, price, location, country },
      { new: true }
    );

    if (!showDetail) {
      return res.status(404).send("Listing not found");
    }

    // Render the correct view that matches the updated data
    res.render("listings/show.ejs", { showDetail });
    console.log(showDetail);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the listing.");
  }
});

//for delete
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

//show post
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const showDetail = await Listing.findById(id);
    res.render("listings/show.ejs", { showDetail });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.render("listings/home.ejs");
});
app.listen(port, () => {
  console.log("i am listing");
});
