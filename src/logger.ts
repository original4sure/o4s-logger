import { createLogger, transports, format, Logger } from "winston";
import { ExpressLoggerMiddlewares, KoaLoggerMiddlewares } from "./middlewares";

export namespace logger {
  let logger: Logger;

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
