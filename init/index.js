require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("../models/listings.js");
const initData = require("./data.js");

const MONGO_URI = process.env.MONGO_URI;

main()
  .then(() => {
    console.log("i am db");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  mongoose.connect(MONGO_URI);
}

const insertDB = async () => {
  await Listing.deleteMany();
  await Listing.insertMany(initData.data);
  console.log("insert data succesfully");
};

insertDB();
