const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/api/test", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "hello from the api" });
});

router.get("/api/test2", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "this is the second example too" });
});

router.get("/api/test3", (req, res) => {
  console.log("api has been hit");
  res.send(fs.readFileSync("data.json", "utf8", (err) => console.log(err)));
});

module.exports = router;
