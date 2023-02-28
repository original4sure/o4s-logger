import {
  createLogger,
  transports,
  format,
  Logger as WinstonLogger,
} from "winston";
import { ExpressLoggerMiddlewares, KoaLoggerMiddlewares } from "./middlewares";
import { loggerConfig } from "./config";

export namespace logger {
  let logger: WinstonLogger;

  const getLogger = () => {
    if (!logger) {
      logger = createLogger({
        level: loggerConfig.getLoggerConfig().logLevel,
        format: format.combine(
          format.errors({ stack: true }),
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

  export const error = (data: any) => getLogger().error(data);
  export const warn = (data: any) => getLogger().warn(data);
  export const info = (data: any) => getLogger().info(data);
  export const http = (data: any) => getLogger().http(data);
  export const verbose = (data: any) => getLogger().verbose(data);
  export const debug = (data: any) => getLogger().debug(data);
  export const silly = (data: any) => getLogger().silly(data);
}

export namespace RequestLogger {
  export const KoaSuccessLogger =
    KoaLoggerMiddlewares.getSuccessLoggerMiddleware;
  export const KoaErrorLogger = KoaLoggerMiddlewares.getErrorLoggerMiddleware;

  export const ExpressSuccessLogger =
    ExpressLoggerMiddlewares.getSuccessLoggerMiddleware;
  export const ExpressErrorLogger =
    ExpressLoggerMiddlewares.getErrorLoggerMiddleware;
}
