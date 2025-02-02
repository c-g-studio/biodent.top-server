import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";
import { env } from "../utils/env.js";

const bot = new TelegramBot(env("TG_BOT_TOKEN"), { polling: true });

export async function sendMessageToAllowedUsers(data) {
  await bot.sendMessage(env("TG_CHAT_ID"), data.text, {
    parse_mode: "HTML",
  });
}
