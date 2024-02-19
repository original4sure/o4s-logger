export declare namespace KoaLoggerMiddlewares {
    const getSuccessLoggerMiddleware: (reqFilter?: LogFilter) => (ctx: any, next: any) => Promise<unknown>;
    const getErrorLoggerMiddleware: (reqFilter?: LogFilter) => (ctx: any, next: any) => Promise<unknown>;
}
