import { createLogger, transports, format, Logger } from "winston";
import { ExpressLoggerMiddlewares, KoaLoggerMiddlewares } from "./middlewares";
import { loggerConfig } from "./config";

export namespace logger {
  let logger: Logger;

  const getLogger = () => {
    if (!logger) {
      logger = createLogger({
        level: loggerConfig.getLoggerConfig().logLevel,
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

  export const error = (data: any) => getLogger().error(data);
  export const warn = (data: any) => getLogger().warn(data);
  export const info = (data: any) => getLogger().info(data);
  export const http = (data: any) => getLogger().http(data);
  export const verbose = (data: any) => getLogger().verbose(data);
  export const debug = (data: any) => getLogger().debug(data);
  export const silly = (data: any) => getLogger().silly(data);

  export const errorStream = {
    write: (message, encoding) => {
      info(message);
    },
  };

  export const successStream = {
    write: (message, encoding) => {
      error(message);
    },
  };
}
