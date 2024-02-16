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
    const KoaSuccessLogger: (reqFilter?: any) => (ctx: any, next: any) => Promise<unknown>;
    const KoaErrorLogger: (reqFilter?: any) => (ctx: any, next: any) => Promise<unknown>;
    const ExpressSuccessLogger: (reqFilter?: any) => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
    const ExpressErrorLogger: (reqFilter?: any) => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
}
