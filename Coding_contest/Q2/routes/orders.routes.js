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
  const { productId, quantity } = req.body;
  const db = readDB();

  const product = db.products.find(p => p.id == productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  if (product.stock < quantity) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  const newOrder = {
    id: Date.now(),
    productId,
    quantity,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  product.stock -= quantity;
  db.orders.push(newOrder);

  writeDB(db);
  res.status(201).json(newOrder);
});

router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.orders);
});

router.delete("/:orderId", (req, res) => {
  const db = readDB();
  const order = db.orders.find(o => o.id == req.params.orderId);

  if (!order) return res.status(404).json({ message: "Order not found" });

  order.status = "cancelled";

  const product = db.products.find(p => p.id == order.productId);
  product.stock += order.quantity;

  writeDB(db);
  res.json(order);
});

router.patch("/change-status/:orderId", (req, res) => {
  const db = readDB();
  const order = db.orders.find(o => o.id == req.params.orderId);

  if (!order) return res.status(404).json({ message: "Order not found" });

  if (order.status === "placed") order.status = "shipped";
  else if (order.status === "shipped") order.status = "delivered";

  writeDB(db);
  res.json(order);
});

module.exports = router;