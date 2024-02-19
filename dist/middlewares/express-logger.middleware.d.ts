export declare namespace ExpressLoggerMiddlewares {
    const getSuccessLoggerMiddleware: (reqFilter?: LogFilter) => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
    const getErrorLoggerMiddleware: (reqFilter?: LogFilter) => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
}
