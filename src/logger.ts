import { createLogger, transports, format, Logger } from "winston";
import { ExpressLoggerMiddlewares, KoaLoggerMiddlewares } from "./middlewares";
import { dirname } from "path";

export namespace AppLoggers {
  let logger: Logger;

  export const initNewRelic = () => {
    if (process.env.NODE_ENV !== "local" && process.env.NEW_RELIC_LICENSE_KEY) {
      process.env.NEW_RELIC_HOME = dirname(__dirname);
      /* tslint:disable-next-line */
      require("newrelic");
    }
  };

  const getLogger = () => {
    if (!logger) {
      logger = createLogger({
        format: format.combine(
          format.colorize(),
          format.prettyPrint(),
          format.splat(),
          format.simple()
        ),
        transports: [new transports.Console()],
      });
    }

    return logger;
  };

  export const KoaSuccessLogger = KoaLoggerMiddlewares.SuccessLoggerMiddleware;
  export const KoaErrorLogger = KoaLoggerMiddlewares.ErrorLoggerMiddleware;

  export const ExpressSuccessLogger =
    ExpressLoggerMiddlewares.SuccessLoggerMiddleware;
  export const ExpressErrorLogger =
    ExpressLoggerMiddlewares.ErrorLoggerMiddleware;

  export const info = (data: any) => getLogger().info(data);
  export const error = (err: any) => getLogger().error(err);
}
