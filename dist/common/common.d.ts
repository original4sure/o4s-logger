/**
 * Get Request Details
 * @param req
 * @returns
 */
export declare const getRequestDetails: (framework: "koa" | "express") => (req: any) => string;
/**
 * Get real ip
 * @param req
 * @returns
 */
export declare const getRealIp: (framework: "koa" | "express") => (req: any) => any;
/**
 * Get the log formatting string
 * @returns
 */
export declare const getFormatString: () => string;
/**
 * Check if response is error or not
 * @param req
 * @param res
 * @returns
 */
export declare const IsErrorResponse: (req: any, res: any) => boolean;
/**
 * Check if response is success or not
 * @param req
 * @param res
 * @returns
 */
export declare const IsSuccessResponse: (req: any, res: any) => boolean;
