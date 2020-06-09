const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/test", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "hello from the api" });
});

router.get("/api/test2", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "this is the second example too" });
});

module.exports = router;
