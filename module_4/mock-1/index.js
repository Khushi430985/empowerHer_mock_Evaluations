const express = require("express");

const productsRouter = require("./routes/products.routes");
const ordersRouter = require("./routes/orders.routes");
const analyticsRouter = require("./routes/analytics.routes");

const app = express();
app.use(express.json());

// Home route (starting error fix)
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/analytics", analyticsRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});