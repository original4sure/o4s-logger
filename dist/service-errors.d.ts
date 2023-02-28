import { HttpError } from "http-errors";
export declare const createLegacyRPCHandler: (serviceName: string, appLogger: any) => (err: any) => HttpError<number>;
