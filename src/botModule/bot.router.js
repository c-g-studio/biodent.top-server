import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { botController } from "./bot.сontroller.js";

const router = Router();

router.post("/send-to-bot", ctrlWrapper(botController));

export default router;
