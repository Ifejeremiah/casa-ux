const pino = require("pino");

module.exports = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:yyyy-mm-dd HH:mm:ss:sss",
    },
  },
});
