const express = require("express");
const User = require("../models/user.js");
const passport = require("passport");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});
router.post("/signup", async (req, res) => {
  try {
    let { email, username, password } = req.body;
    let newUser = new User({
      email,
      username,
    });
    let registerUser = await User.register(newUser, password);
    console.log(registerUser);
    req.flash("success", "Welcome to Sharjeel New project");
    res.redirect("/login");
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
});

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//     failureFlash: true,
//   }),
//   async (req, res) => {
//     res.send("you are successfully logedin");
//   }
// );
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "you are successfully logedin");
    res.redirect("/listings");
  }
);

module.exports = router;
