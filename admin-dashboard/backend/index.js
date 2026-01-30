import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(productRouter)


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server listening on PORT:", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });
