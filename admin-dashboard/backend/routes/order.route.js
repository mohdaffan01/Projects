import express from "express"
import { createOrder, getOrder } from "../controller/order.controller.js"

const orderRouter = express.Router()

orderRouter.post("/createOrder", createOrder)
orderRouter.get("/getOrders", getOrder)

export default orderRouter