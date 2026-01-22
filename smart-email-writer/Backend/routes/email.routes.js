import express from "express";
import { generateEmail } from "../controller/email.controller.js";

const router = express.Router();

router.post("/generate", generateEmail);

export default router;
