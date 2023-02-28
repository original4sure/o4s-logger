import { HttpError } from "http-errors";
import { Logger } from "winston";
export declare const createLegacyRPCHandler: (serviceName: string, appLogger: Logger) => (err: any) => HttpError<number>;
