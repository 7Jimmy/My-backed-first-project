const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("i am user");
});
router.get("/:id", (req, res) => {
  res.send("user and user id");
});

router.post("/", (req, res) => {
  res.send("user post data");
});
router.delete("/:id", (req, res) => {
  res.send("delete user");
});

module.exports = router;
