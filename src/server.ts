// import createHttpError from "http-errors";
import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = async () => {
  const PORT = Config.PORT;
  try {
    // throw new Error("Something went wrong");
    // const err = createHttpError(401, "you are not allowed to access this page");
    // throw err;
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
