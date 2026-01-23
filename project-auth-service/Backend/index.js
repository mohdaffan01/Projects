import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import User from "./model/user.model.js";
import { createUser, login } from "./controller/user.controller.js";

const app = express();
app.use(cors())
app.use(express.json());


dotenv.config()

app.post("/user", createUser)
app.post("/login", login)

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(3000, () => {
    console.log("Server listen on PORT 3000");
  });
});
