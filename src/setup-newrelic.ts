import * as dotenv from "dotenv";
import { dirname, resolve } from "path";
import { logger } from "./logger";

const initNewRelic = () => {
  const loggerRootDir = dirname(__dirname);
  const applicationRootDir = dirname(dirname(dirname(loggerRootDir)));

  const envFilePath = resolve(`${applicationRootDir}/environment/.env`);
  dotenv.config({ path: envFilePath });

  if (
    process.env.NODE_ENV !== "local" &&
    process.env.DEPLOY_ENV &&
    process.env.NEW_RELIC_LICENSE_KEY
  ) {
    process.env.NEW_RELIC_HOME = loggerRootDir;
    /* tslint:disable-next-line */
    require("newrelic");
  } else {
    logger.info(
      "newrelic not started!!! mandatory keys not present: NODE_ENV | DEPLOY_ENV | NEW_RELIC_LICENSE_KEY"
    );
  }
};

initNewRelic();
