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
  const initMorganTokens = (reqFilter?: any) => {
    /** prepare custom morgan tokens */
    morgan.token("o4s-req-details", getRequestDetails("express", reqFilter));
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

  export const getSuccessLoggerMiddleware = (reqFilter?: any) => {
    initMorganTokens(reqFilter);

    return SuccessLoggerMiddleware;
  };

  export const getErrorLoggerMiddleware = (reqFilter?: any) => {
    initMorganTokens(reqFilter);

    return ErrorLoggerMiddleware;
  };
}
