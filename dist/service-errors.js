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
    return !error.response; //  if response not present in error, its usually a connection error or timeout.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1lcnJvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VydmljZS1lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQTJCO0FBQzNCLDBDQUEwQztBQUcxQyxJQUFLLG9CQU9KO0FBUEQsV0FBSyxvQkFBb0I7SUFDdkIscURBQTZCLENBQUE7SUFDN0IsaURBQXlCLENBQUE7SUFDekIsK0NBQXVCLENBQUE7SUFDdkIsdUNBQWUsQ0FBQTtJQUNmLCtDQUF1QixDQUFBO0lBQ3ZCLHFEQUE2QixDQUFBO0FBQy9CLENBQUMsRUFQSSxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBT3hCO0FBaUNELFNBQVMsaUJBQWlCLENBQ3hCLEtBQXVDO0lBRXZDLHlEQUF5RDtJQUN6RCx1Q0FBdUM7SUFDdkMsT0FBTztJQUNQLE9BQU8sQ0FBRSxLQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsZ0ZBQWdGO0FBQ25ILENBQUM7QUFDRCxTQUFTLGNBQWMsQ0FDckIsS0FBb0M7SUFFcEMsT0FBTyxPQUFRLEtBQXVCLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQztBQUMvRCxDQUFDO0FBRUQsTUFBTSxjQUFjLEdBQUcsQ0FDckIsS0FBdUMsRUFDckIsRUFBRTtJQUNwQixJQUFJLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzVCLE9BQU87WUFDTCxPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU8sRUFBRSxjQUFjLEtBQUssQ0FBQyxPQUFPLGtCQUFrQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUN4RSxZQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDekIsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQztLQUNIO1NBQU07UUFDTCxJQUFJLFlBQVksR0FBVyxpQkFBaUIsQ0FBQztRQUM3QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFB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