import { ILoggerConfiguration, LOG_LEVEL } from "../interfaces";
import * as dotenv from "dotenv";
import { dirname, resolve } from "path";

export namespace loggerConfig {
  /**
   * Get the default config
   * @returns
   */
  const getDefaultConfig = () => {
    const defaultConfig: ILoggerConfiguration = {
      logLevel: LOG_LEVEL.info,
    };
    return defaultConfig;
  };

  const config: ILoggerConfiguration = getDefaultConfig();

  /**
   * load the logger configuration
   */
  export const loadLoggerConfiguration = () => {
    config.logLevel = (process.env.LOG_LEVEL as LOG_LEVEL) || LOG_LEVEL.info;
  };

  /**
   * Get the logger configuration
   */
  export const getLoggerConfig = () => {
    return config;
  };

  export const setEnvironment = () => {
    /* tslint:disable-next-line */
    console.log("loading var");
    /** load environment variables */
    const loggerRootDir = dirname(dirname(__dirname));
    const applicationRootDir = dirname(dirname(dirname(loggerRootDir)));

    const envFilePath = resolve(`${applicationRootDir}/environment/.env`);
    dotenv.config({ path: envFilePath });
  };
}

loggerConfig.setEnvironment();
