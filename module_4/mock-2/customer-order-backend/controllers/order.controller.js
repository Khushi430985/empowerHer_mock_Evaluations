import { supabase } from "../config/supabase.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  const { product_name, quantity, price, customerId } = req.body;

  const { data: customer } = await supabase
    .from("customers")
    .select("*")
    .eq("id", customerId)
    .single();

  if (!customer) return res.status(404).json({ error: "Customer not found" });

  const { error } = await supabase.from("orders").insert([
    { product_name, quantity, price, customer_id: customerId }
  ]);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "Order created" });
};

// GET CUSTOMER ORDERS
export const getOrders = async (req, res) => {
  const { customerId } = req.params;

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("customer_id", customerId);

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};

//  UPDATE ORDER
export const updateOrder = async (req, res) => {
  const { orderId } = req.params;

  const { data: existing } = await supabase
    .from("orders")
    .select("*")
    .eq("id", orderId)
    .single();

  if (!existing) return res.status(404).json({ error: "Order not found" });

  const { error } = await supabase
    .from("orders")
    .update(req.body)
    .eq("id", orderId);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "Order updated" });
};

//  DELETE ORDER
export const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  await supabase.from("orders").delete().eq("id", orderId);

  res.json({ message: "Order deleted" });
};