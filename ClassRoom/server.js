const express = require("express");
const app = express();
const posts = require("./router/post.js");
const users = require("./router/user.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOption = session({
  secret: "tosecret",
  resave: false,
  saveUninitialized: true,
});

app.use(sessionOption);
app.use(flash());
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("Success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;

  req.session.name = name;
  if (name === "anonymous") {
    req.flash("error", "user not register successfully!!!");
  } else {
    req.flash("Success", "user register successfully!!!");
  }

  res.redirect("/hello");
  //console.log(req.session.name);
});
app.get("/hello", (req, res) => {
  //res.send(`hello  ${req.session.name}`);
  //console.log(req.flash("Success"));
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/session", (req, res) => {
//   res.send("session id done");
// });

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`this is req max count is ${req.session.count}`);
// });

// const cookieParser = require("cookie-parser");
// //app.use(cookieParser());
// app.use(cookieParser("secretcode"));
// app.use("/posts", posts);
// app.use("/users", users);
// app.get("/getcookies", (req, res) => {
//   res.cookie("name", "Sharjeel");
//   res.cookie("love", "jani");
//   res.send("we set cookies");
// });

// app.get("/greet", (req, res) => {
//   let { name = "nothing", color } = req.cookies;
//   console.log(`your name is ${name} and your color is ${color}`);
//   res.send(`your name is ${name} and your color is ${color}`);
// });

// app.get("/", (req, res) => {
//   console.log("Cookie:", req.cookies);
//   console.dir(req.cookies);
//   res.send("i am home");
// });

// const cookie = require("cookie-parser");

// app.use(cookie());

// app.get("/setcookies", (req, res) => {
//   res.cookie("love", "good");
//   res.cookie("what", "nothing yar");
//   res.send("i have set cookie");
// });
// app.get("/question", (req, res) => {
//   let { love, what } = req.cookies;
//   res.send(what);
// });

// app.get("/getcookiesigned", (req, res) => {
//   res.cookie("abc", "this is a english lanaguage", { signed: true });
//   res.send("signed cooke is set now");
// });
// app.get("/verify", (req, res) => {
//   res.send(req.signedCookies);
// });
app.listen(3000, (req, res) => {
  console.log("i am server");
});
