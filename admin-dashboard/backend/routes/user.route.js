import express from "express";
import { createUser, getUser, login } from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { isAdminMiddleware } from "../middleware/isAdmin.middleware.js";

const userRouter = express.Router();

userRouter.post("/signup",createUser);
userRouter.post("/login",login);
userRouter.get("/allusers",authMiddleware,isAdminMiddleware , getUser);


export default userRouter
