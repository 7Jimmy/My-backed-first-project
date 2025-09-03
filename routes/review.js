const express = require("express");

const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listings.js");
const { listingSchema, reviewsSchema } = require("../schema.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const methodOverride = require("method-override");
router.use(methodOverride("_method"));

//Reviews

const validateReviews = (req, res, next) => {
  const { error } = reviewsSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(404, errMsg);
  } else {
    next();
  }
};
//post route
router.post(
  "/",
  validateReviews,
  wrapAsync(async (req, res, next) => {
    const id = req.listingId;

    console.log("Listing ID:", id); // Debugging: Log the ID

    const list = await Listing.findById(id);
    console.log("Listing:", list); // Debugging: Log the listing

    if (!list) {
      throw new ExpressError(404, "Listing not found");
    }

    const newReview = new Review(req.body.review);
    list.reviews.push(newReview);
    await newReview.save();
    await list.save();
    req.flash("success", "New Review Created");
    res.redirect(`/listings/${id}`);
  })
);

router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    const id = req.listingId;
    const { reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted Successfully!!!");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
