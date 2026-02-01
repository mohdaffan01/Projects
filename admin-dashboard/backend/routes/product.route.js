import express from "express"
import { createProduct, getProduct } from "../controller/product.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { isAdminMiddleware } from "../middleware/isAdmin.middleware.js";

const productRouter = express.Router();

productRouter.post("/createProduct",authMiddleware,isAdminMiddleware, createProduct)
productRouter.get("/getProduct", authMiddleware,isAdminMiddleware,getProduct)


export default productRouter