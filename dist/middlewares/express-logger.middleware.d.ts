import { LogFilter } from "../interfaces";
export declare namespace ExpressLoggerMiddlewares {
    const getSuccessLoggerMiddleware: <T>(reqFilter?: LogFilter<T> | undefined) => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
    const getErrorLoggerMiddleware: <T>(reqFilter?: LogFilter<T> | undefined) => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
}
