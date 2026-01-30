import express from "express"
import { createProduct } from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.post("/createProduct", createProduct)


export default productRouter