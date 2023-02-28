"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLegacyRPCHandler = void 0;
const R = require("ramda");
const httpErrors = require("http-errors");
var ConnectionErrorCodes;
(function (ConnectionErrorCodes) {
    ConnectionErrorCodes["ECONNREFUSED"] = "ECONNREFUSED";
    ConnectionErrorCodes["ECONNRESET"] = "ECONNRESET";
    ConnectionErrorCodes["ENOTFOUND"] = "ENOTFOUND";
    ConnectionErrorCodes["EPIPE"] = "EPIPE";
    ConnectionErrorCodes["ETIMEDOUT"] = "ETIMEDOUT";
    ConnectionErrorCodes["ECONNABORTED"] = "ECONNABORTED";
})(ConnectionErrorCodes || (ConnectionErrorCodes = {}));
function isConnectionError(error) {
    //   return Object.values(ConnectionErrorCodes).includes(
    //     (error as IConnectionError).code
    //   );
    return !!error.response; //  if response not present in error, its usually a connection error or timeout.
}
function isServiceError(error) {
    return typeof error.success === "boolean";
}
const normalizeError = (error) => {
    if (isConnectionError(error)) {
        return {
            success: false,
            message: `RPC_ERROR: ${error.message} while hitting ${error.config.url}`,
            errorMessage: error.stack,
            errorCode: error.code,
            status: 500,
        };
    }
    else {
        let errorMessage = "Unhandled error";
        if (Array.isArray(error.response.data.error)) {
            errorMessage = error.response.data.error.join(", ");
        }
        else if (typeof error.response.data.error === "string") {
            errorMessage = error.response.data.error;
        }
        else if (typeof error.response.data.error === "object") {
            errorMessage = JSON.stringify(error.response.data.error.message);
        }
        else {
            errorMessage = JSON.stringify(error.response.data);
        }
        return {
            success: false,
            message: `RPC_ERROR: ${error.message}`,
            errorMessage,
            errorCode: R.pathOr(error.status || 500, ["response", "data", "error", "code"], error),
            status: R.pathOr(503, ["response", "status"], error),
        };
    }
};
// TODO: handle error response in a better way
// desc: had to add another key "errorCode" in httpErrors.
const createHttpError = (error) => {
    // logger.error(ErrorMessage("ERROR", error.message))
    const specificError = new httpErrors[error.status](Message(error.errorMessage));
    specificError.errorCode = error.errorCode;
    return specificError;
};
const createLegacyRPCHandler = (serviceName, appLogger) => {
    return (err) => {
        const normalisedError = normalizeError(err);
        appLogger.error(`[${serviceName} RPC]: ${JSON.stringify(normalisedError)}`);
        return createHttpError(normalisedError);
    };
};
exports.createLegacyRPCHandler = createLegacyRPCHandler;
const Message = (code, reasons, ...args) => {
    const wrap = [code];
    if (reasons) {
        wrap.push(reasons);
    }
    if (args.length > 0) {
        wrap.push(args.join(" - "));
    }
    return wrap.join(" - ");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1lcnJvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VydmljZS1lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQTJCO0FBQzNCLDBDQUEwQztBQUsxQyxJQUFLLG9CQU9KO0FBUEQsV0FBSyxvQkFBb0I7SUFDdkIscURBQTZCLENBQUE7SUFDN0IsaURBQXlCLENBQUE7SUFDekIsK0NBQXVCLENBQUE7SUFDdkIsdUNBQWUsQ0FBQTtJQUNmLCtDQUF1QixDQUFBO0lBQ3ZCLHFEQUE2QixDQUFBO0FBQy9CLENBQUMsRUFQSSxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBT3hCO0FBaUNELFNBQVMsaUJBQWlCLENBQ3hCLEtBQXVDO0lBRXZDLHlEQUF5RDtJQUN6RCx1Q0FBdUM7SUFDdkMsT0FBTztJQUNQLE9BQU8sQ0FBQyxDQUFFLEtBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnRkFBZ0Y7QUFDcEgsQ0FBQztBQUNELFNBQVMsY0FBYyxDQUNyQixLQUFvQztJQUVwQyxPQUFPLE9BQVEsS0FBdUIsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQy9ELENBQUM7QUFFRCxNQUFNLGNBQWMsR0FBRyxDQUNyQixLQUF1QyxFQUNyQixFQUFFO0lBQ3BCLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDNUIsT0FBTztZQUNMLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFLGNBQWMsS0FBSyxDQUFDLE9BQU8sa0JBQWtCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ3hFLFlBQVksRUFBRSxLQUFLLENBQUMsS0FBSztZQUN6QixTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDckIsTUFBTSxFQUFFLEdBQUc7U0FDWixDQUFDO0tBQ0g7U0FBTTtRQUNMLElBQUksWUFBWSxHQUFXLGlCQUFpQixDQUFDO1FBQzdDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENB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