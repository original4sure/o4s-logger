import { loggerConfig } from "./config";

export const initNewRelic = () => {
  if (loggerConfig.getLoggerConfig().initNewRelic) {
    /* tslint:disable-next-line */
    require("newrelic");
  }
};

export const initNewRelicCheck = () => {
  return (
    process.env.NODE_ENV !== "local" &&
    process.env.DEPLOY_ENV &&
    (process.env.NEW_RELIC_LICENSE_KEY || process.env.NEW_RELIC_LICENSE_KEY_2)
  );
};
