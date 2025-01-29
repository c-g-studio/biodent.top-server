import pino from "pino-http";
export const pinoCfg = () =>
  pino({
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        ignore: "res, remotePort, remoteAddress",
      },
    },
  });
