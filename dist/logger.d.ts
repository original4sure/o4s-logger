import { Logger as WinstonLogger } from "winston";
export declare namespace logger {
    const error: (data: any) => WinstonLogger;
    const warn: (data: any) => WinstonLogger;
    const info: (data: any) => WinstonLogger;
    const http: (data: any) => WinstonLogger;
    const verbose: (data: any) => WinstonLogger;
    const debug: (data: any) => WinstonLogger;
    const silly: (data: any) => WinstonLogger;
}
export declare namespace RequestLogger {
    const KoaSuccessLogger: () => (ctx: any, next: any) => Promise<unknown>;
    const KoaErrorLogger: () => (ctx: any, next: any) => Promise<unknown>;
    const ExpressSuccessLogger: () => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
    const ExpressErrorLogger: () => (req: any, res: any, callback: (err?: Error | undefined) => void) => void;
}
