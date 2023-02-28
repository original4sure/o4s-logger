export declare namespace KoaLoggerMiddlewares {
    const getSuccessLoggerMiddleware: () => (ctx: any, next: any) => Promise<unknown>;
    const getErrorLoggerMiddleware: () => (ctx: any, next: any) => Promise<unknown>;
}
