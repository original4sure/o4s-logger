import { dirname } from "path";

export const initNewRelic = () => {
  if (initNewRelicCheck()) {
    const newrelicConfigDirPath = dirname(__dirname);

    /** from this path newrelic.js will be searched */
    process.env.NEW_RELIC_HOME = newrelicConfigDirPath;

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
