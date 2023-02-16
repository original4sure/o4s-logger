import * as morgan from "koa-morgan";
import { loggerConfig } from "../config";
import {
  IsErrorResponse,
  IsSuccessResponse,
  getFormatString,
  getRealIp,
  getRequestDetails,
} from "../common/common";
import { logger } from "../logger";

loggerConfig.getLoggerConfig();
export namespace KoaLoggerMiddlewares {
  /** prepare custom morgan tokens */
  morgan.token("o4s-req-details", getRequestDetails);
  morgan.token("o4s-real-ip", getRealIp);

  /**
   * Error logger middleware
   */
  export const ErrorLoggerMiddleware = morgan(getFormatString(), {
    skip: IsErrorResponse,
    stream: {
      write: (message, encoding) => {
        logger.error(message);
      },
    },
  });

  /**
   * Success logger middleware
   */
  export const SuccessLoggerMiddleware = morgan(getFormatString(), {
    skip: IsSuccessResponse,
    stream: {
      write: (message, encoding) => {
        logger.info(message);
      },
    },
  });
}
