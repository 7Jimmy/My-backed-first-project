const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("i am post");
});
router.get("/:id", (req, res) => {
  res.send("post and post id");
});

router.post("/", (req, res) => {
  res.send("post post data");
});
router.delete("/:id", (req, res) => {
  res.send("delete rout");
});

module.exports = router;
