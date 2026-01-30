import express from "express"
import { createProduct, getProduct } from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.post("/createProduct", createProduct)
productRouter.get("/getProduct", getProduct)


export default productRouter