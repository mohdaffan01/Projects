import express from "express";
import { createUser, getUser, login } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup",createUser)
userRouter.post("/login",login)
userRouter.get("/allusers", getUser)


export default userRouter
