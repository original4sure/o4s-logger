import { LogFilter } from "../interfaces";
export declare namespace KoaLoggerMiddlewares {
    const getSuccessLoggerMiddleware: <T>(reqFilter?: LogFilter<T> | undefined) => (ctx: any, next: any) => Promise<unknown>;
    const getErrorLoggerMiddleware: <T>(reqFilter?: LogFilter<T> | undefined) => (ctx: any, next: any) => Promise<unknown>;
}
