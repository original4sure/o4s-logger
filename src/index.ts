import { loggerConfig } from "./config";

/** first load logger configuration */
loggerConfig.loadLoggerConfiguration();

import { initNewRelic } from "./setup-newrelic";

initNewRelic();

export * from "./logger";
export * from "./service-errors";
