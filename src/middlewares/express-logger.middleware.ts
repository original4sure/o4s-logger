import * as morgan from "morgan";
import {
  IsErrorResponse,
  IsSuccessResponse,
  getFormatString,
  getRealIp,
  getRequestDetails,
} from "../common/common";

export namespace ExpressLoggerMiddlewares {
  /** prepare custom morgan tokens */
  morgan.token("o4s-req-details", getRequestDetails);
  morgan.token("o4s-real-ip", getRealIp);

  /**
   * Error logger middleware
   */
  export const ErrorLoggerMiddleware = morgan(getFormatString(), {
    skip: IsErrorResponse,
    stream: process.stderr,
  });

  /**
   * Success logger middleware
   */
  export const SuccessLoggerMiddleware = morgan(getFormatString(), {
    skip: IsSuccessResponse,
    stream: process.stdout,
  });
}
