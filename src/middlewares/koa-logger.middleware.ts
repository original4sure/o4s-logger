import * as originalMorgan from "morgan";
import {
  IsErrorResponse,
  IsSuccessResponse,
  getFormatString,
  getRealIp,
  getRequestDetails,
} from "../common/common";
import { logger } from "../logger";
import { LogFilter } from "../interfaces";

export namespace KoaLoggerMiddlewares {
  function morgan(format: string, options: any) {
    const fn = originalMorgan(format, options);
    return (ctx, next) => {
      return new Promise((resolve, reject) => {
        ctx.request.ctx = ctx;
        fn(ctx.request, ctx.res, (err) => {
          err ? reject(err) : resolve(ctx);
        });
      }).then(next);
    };
  }
  /** prepare custom morgan tokens */
  morgan.compile = originalMorgan.compile;
  morgan.format = originalMorgan.format;
  morgan.token = originalMorgan.token;

  /**
   * init morgan token
   */
  const initMorganTokens = <T>(reqFilter?: LogFilter<T>) => {
    /** prepare custom morgan tokens */
    morgan.token("o4s-req-details", getRequestDetails("koa", reqFilter));
    morgan.token("o4s-real-ip", getRealIp("koa"));
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

  export const getSuccessLoggerMiddleware = <T>(reqFilter?: LogFilter<T>) => {
    initMorganTokens(reqFilter);

    return SuccessLoggerMiddleware;
  };

  export const getErrorLoggerMiddleware = <T>(reqFilter?: LogFilter<T>) => {
    initMorganTokens(reqFilter);

    return ErrorLoggerMiddleware;
  };
}
