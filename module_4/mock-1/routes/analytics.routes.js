const express = require("express");
const fs = require("fs");

const router = express.Router();

const readDB = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

router.get("/allorders", (req, res) => {
  const db = readDB();
  res.json({ count: db.orders.length, orders: db.orders });
});

router.get("/cancelled-orders", (req, res) => {
  const db = readDB();
  const cancelled = db.orders.filter(o => o.status === "cancelled");
  res.json({ count: cancelled.length, orders: cancelled });
});

router.get("/shipped", (req, res) => {
  const db = readDB();
  const shipped = db.orders.filter(o => o.status === "shipped");
  res.json({ count: shipped.length, orders: shipped });
});

router.get("/alltotalrevenue", (req, res) => {
  const db = readDB();

  const totalRevenue = db.orders
    .filter(o => o.status !== "cancelled")
    .reduce((sum, o) => {
      const product = db.products.find(p => p.id == o.productId);
      return sum + (o.quantity * product.price);
    }, 0);

  res.json({ totalRevenue });
});

module.exports = router;