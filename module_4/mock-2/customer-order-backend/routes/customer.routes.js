import express from "express";
import { registerCustomer } from "../controllers/customer.controller";
import { validateCustomer } from "../validations/customer.validation";

const router=express.Router();
router.post("/register", validateCustomer, registerCustomer);

export default router;