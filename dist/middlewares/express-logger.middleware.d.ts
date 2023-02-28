export declare namespace ExpressLoggerMiddlewares {
    const getSuccessLoggerMiddleware: () => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
    const getErrorLoggerMiddleware: () => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
}
