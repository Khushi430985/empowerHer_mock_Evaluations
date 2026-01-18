const express = require("express");
const fs = require("fs");

const router = express.Router();

const readDB = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

router.post("/", (req, res) => {
  const db = readDB();
  const newProduct = {
    id: Date.now(),
    ...req.body
  };
  db.products.push(newProduct);
  writeDB(db);
  res.status(201).json(newProduct);
});

router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.products);
});

module.exports = router;