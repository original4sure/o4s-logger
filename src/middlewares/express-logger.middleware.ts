import * as morgan from "morgan";
import {
  IsErrorResponse,
  IsSuccessResponse,
  getFormatString,
} from "../common/common";
import { logger } from "../logger";

export namespace ExpressLoggerMiddlewares {
  /**
   * init the express morgan tokens
   */
  const initMorganTokens = () => {
    /** prepare custom morgan tokens */
    morgan.token("o4s-req-details", (req) => {
      return JSON.stringify({
        headers: req.headers,
        body: req.body,
        query: req.query,
        params: req.params,
      });
    });

    morgan.token("o4s-real-ip", (req) => {
      return req.connection.remoteAddress || "";
    });
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
