import { Logger as WinstonLogger } from "winston";
export declare namespace logger {
    const error: (...data: any) => WinstonLogger;
    const warn: (...data: any) => WinstonLogger;
    const info: (...data: any) => WinstonLogger;
    const http: (...data: any) => WinstonLogger;
    const verbose: (...data: any) => WinstonLogger;
    const debug: (...data: any) => WinstonLogger;
    const silly: (...data: any) => WinstonLogger;
}
export declare namespace RequestLogger {
    const KoaSuccessLogger: <T>(reqFilter?: import("./interfaces").LogFilter<T> | undefined) => (ctx: any, next: any) => Promise<unknown>;
    const KoaErrorLogger: <T>(reqFilter?: import("./interfaces").LogFilter<T> | undefined) => (ctx: any, next: any) => Promise<unknown>;
    const ExpressSuccessLogger: <T>(reqFilter?: import("./interfaces").LogFilter<T> | undefined) => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
    const ExpressErrorLogger: <T>(reqFilter?: import("./interfaces").LogFilter<T> | undefined) => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
}
