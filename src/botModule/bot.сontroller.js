import { httpError } from "../utils/httpError.js";
import { sendMessageToAllowedUsers } from "./bot.service.js";

export const botController = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    throw httpError(400, "Please provide phone number");
  }

  await sendMessageToAllowedUsers({ text });

  res.status(200).json({
    message: "Send message",
    data: text,
  });
};
