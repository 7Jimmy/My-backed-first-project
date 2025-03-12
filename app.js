require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const engine = require("ejs-mate");
const methodOverride = require("method-override");
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const ExpressError = require("./utils/ExpressError.js");
const Listing = require("./models/listings.js");
const { listingSchema, reviewsSchema } = require("./schema.js");
const wrapAsync = require("./utils/wrapAsync.js");
const Review = require("./models/review.js");
const session = require("express-session");
const flash = require("connect-flash");
const User = require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// ===== Setup EJS Engine and Views =====
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ===== Middleware =====
app.use(express.urlencoded({ extended: true })); // Parses form data
app.use(methodOverride("_method")); // Allows PUT and DELETE methods
app.use(express.static(path.join(__dirname, "public"))); // Serves static files

// ===== Database Connection =====
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URI);
}

//======cookies middleware =====
const sesstionOption = {
  secret: "topSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() * 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sesstionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;

  next();
});
app.get("/demo", async (req, res) => {
  let fakeUser = new User({
    email: "jimmykalair@gmail.com",
    username: "jimmy",
  });
  let registerUser = await User.register(fakeUser, "love");
  res.send(registerUser);
});

app.use("/listings", listingsRouter); // Listings routes
//app.use("/listings/:id/reviews", reviews); // Reviews routes
//app.use("/listings/:id/reviews", reviews);
app.use(
  "/listings/:id/reviews",
  (req, res, next) => {
    req.listingId = req.params.id; // Manually pass `id` to the reviews router
    console.log(req.listingId);
    next();
  },
  reviewsRouter
);
app.use("/", userRouter);

// ===== Routes =====
app.get("/", (req, res) => {
  res.render("listings/home.ejs");
});

// ===== Error Handling =====
// Validation error handler
const handleValidationError = (err) => {
  console.log("Validation error:", err.message);
  return err;
};

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    err = handleValidationError(err);
  }
  next(err);
});

// Catch-all route for undefined endpoints
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

// General error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("error.ejs", { err });
});

// ===== Start Server =====
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
