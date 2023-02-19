import * as morgan from "morgan";
import {
  IsErrorResponse,
  IsSuccessResponse,
  getFormatString,
  getRealIp,
  getRequestDetails,
} from "../common/common";
import { logger } from "../logger";

export namespace ExpressLoggerMiddlewares {
  /**
   * init morgan tokens
   */
  const initMorganTokens = () => {
    /** prepare custom morgan tokens */
    morgan.token("o4s-req-details", getRequestDetails("express"));
    morgan.token("o4s-real-ip", getRealIp("express"));
  };

  /**
   * Error logger middleware
   */
  const ErrorLoggerMiddleware = morgan(getFormatString(), {
    skip: IsErrorResponse,
    stream: {
      write: (message) => {
        logger.error(message);
      },
    },
  });

  /**
   * Success logger middleware
   */
  const SuccessLoggerMiddleware = morgan(getFormatString(), {
    skip: IsSuccessResponse,
    stream: {
      write: (message) => {
        logger.info(message);
      },
    },
  });

  export const getSuccessLoggerMiddleware = () => {
    initMorganTokens();

    return SuccessLoggerMiddleware;
  };

  export const getErrorLoggerMiddleware = () => {
    initMorganTokens();

    return ErrorLoggerMiddleware;
  };
}
