const express = require("express");

const router = express.Router({ mergeParams: true });
const Listing = require("../models/listings.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const methodOverride = require("method-override");
router.use(methodOverride("_method"));

const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema, reviewsSchema } = require("../schema.js");
const { isLoggedIn } = require("../middleware.js");

//middleware for schema validation
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//all listings
router.get(
  "/",
  wrapAsync(async (req, res) => {
    try {
      const alllistings = await Listing.find();
      res.render("listings/index.ejs", { alllistings });
    } catch (error) {
      console.log(err);
    }
  })
);

//for new post
router.get("/new", isLoggedIn, (req, res) => {
  console.log(req.user);

  res.render("listings/new.ejs");
});

//show post
router.get(
  "/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;

    const showDetail = await Listing.findById(id)
      .populate("reviews")
      .populate("owner");

    if (!showDetail) {
      req.flash("error", "Listing you are requested dose not exist");
      res.redirect("/listings");
    }
    if (!showDetail) {
      next(new ExpressError(403, "chat not found"));
    }
    console.log(showDetail);
    res.render("listings/show.ejs", { showDetail });
  })
);
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res, next) => {
    console.log(req.body.listing);

    const newList = new Listing(req.body.listing);

    newList.owner = req.user._id;
    try {
      await newList.save();
      console.log(req.body);
      console.log("save new post");
      req.flash("success", "New listing created successfully!");
      res.redirect("/listings");
    } catch (err) {
      console.log(err);
      next(err);
    }
  })
);

// router.post(
//   "/",
//   validateListing,
//   wrapAsync(async (req, res, next) => {
//     console.log("Request Body:", req.body); // Debug the request body
//     const newList = new Listing(req.body.listing);
//     await newList.save();
//     res.redirect("/listings");
//   })
// );

//update route
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { id } = req.params;

    const alllistings = await Listing.findById(id);
    console.log(alllistings);
    if (!alllistings) {
      req.flash("error", "Listing you are requested dose not exist");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { alllistings });
    // const{title,description,price,location,country}=req.body;
    // try {

    // } catch (error) {
    //     console.log(error)
    // }
  })
);

router.patch(
  "/:id/edit",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    console.log(id);

    // Extract the listing object from the request body
    const { listing } = req.body;

    try {
      const showDetail = await Listing.findByIdAndUpdate(id, listing, {
        new: true,
      });

      req.flash("success", "Listing Updated Successfully");
      res.render("listings/show.ejs", { showDetail });
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while updating the listing.");
    }
  })
);

//for delete
router.delete(
  "/:id",
  isLoggedIn,
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const deleteChat = await Listing.findByIdAndDelete(id);
    if (!deleteChat) {
      next(new ExpressError(403, "delete chat not found"));
    }
    req.flash("success", "Listing deleted Successfully!!");
    res.redirect("/listings");
  })
);

module.exports = router;
