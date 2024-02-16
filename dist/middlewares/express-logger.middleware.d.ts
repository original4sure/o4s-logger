export declare namespace ExpressLoggerMiddlewares {
    const getSuccessLoggerMiddleware: (reqFilter?: any) => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
    const getErrorLoggerMiddleware: (reqFilter?: any) => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
}
