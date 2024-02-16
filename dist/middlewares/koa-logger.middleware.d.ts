export declare namespace KoaLoggerMiddlewares {
    const getSuccessLoggerMiddleware: (reqFilter?: any) => (ctx: any, next: any) => Promise<unknown>;
    const getErrorLoggerMiddleware: (reqFilter?: any) => (ctx: any, next: any) => Promise<unknown>;
}
