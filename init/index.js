require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("../models/listings.js");
const initData = require("./data.js");

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

main()
  .then(() => {
    console.log("i am db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URI);
}

const insertDB = async () => {
  await Listing.deleteMany();
  // initData.data = initData.data.map((obj) => ({
  //   ...obj,
  //   owner: "67afbe4b1956c8b182c51841",
  // }));
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67afbe4b1956c8b182c51841",
  }));
  await Listing.insertMany(initData.data);
  console.log("insert data succesfully");
};

insertDB();
