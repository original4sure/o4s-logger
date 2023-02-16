import { ILoggerConfiguration, LOG_LEVEL } from "../interfaces";
import * as dotenv from "dotenv";
import { dirname, resolve } from "path";
import { initNewRelicCheck } from "../setup-newrelic";

export namespace loggerConfig {
  /**
   * Get the default config
   * @returns
   */
  const getDefaultConfig = () => {
    const defaultConfig: ILoggerConfiguration = {
      initNewRelic: false,
      logLevel: LOG_LEVEL.info,
    };
    return defaultConfig;
  };

  const config: ILoggerConfiguration = getDefaultConfig();

  /**
   * load the logger configuration
   */
  export const loadLoggerConfiguration = () => {
    /** load environment variables */
    const loggerRootDir = dirname(dirname(__dirname));
    const applicationRootDir = dirname(dirname(dirname(loggerRootDir)));

    const envFilePath = resolve(`${applicationRootDir}/environment/.env`);
    dotenv.config({ path: envFilePath });

    if (initNewRelicCheck()) {
      /** from this path newrelic.js will be searched */
      process.env.NEW_RELIC_HOME = loggerRootDir;
      config.initNewRelic = true;
    }

    config.logLevel = (process.env.LOG_LEVEL as LOG_LEVEL) || LOG_LEVEL.info;
  };

  /**
   * Get the logger configuration
   */
  export const getLoggerConfig = () => {
    return config;
  };
}
