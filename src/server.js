import cors from "cors";
import express from "express";
import botRouter from "./botModule/bot.router.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { env } from "./utils/env.js";
import { pinoCfg } from "./utils/pinoConfig.js";

const PORT = Number(env("PORT"));

export const server = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(pinoCfg());

  app.use("/api", botRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
