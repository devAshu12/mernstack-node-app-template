import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = async () => {
  const PORT = Config.PORT;
  try {
    // throw new Error("Something went wrong");
    app.listen(PORT, () => {
      logger.info(`Listining on PORT: ${PORT}`);
    });
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    }
  }
};

startServer();
