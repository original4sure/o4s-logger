import * as R from "ramda";
import * as httpErrors from "http-errors";
import { HttpError } from "http-errors";

enum ConnectionErrorCodes {
  ECONNREFUSED = "ECONNREFUSED",
  ECONNRESET = "ECONNRESET",
  ENOTFOUND = "ENOTFOUND",
  EPIPE = "EPIPE",
  ETIMEDOUT = "ETIMEDOUT",
  ECONNABORTED = "ECONNABORTED",
}

interface IConnectionError {
  code: ConnectionErrorCodes;
  address: string;
  message: string;
  stack: string;
  config: { url: string };
}

interface IServiceError {
  success: boolean;
  response: {
    data: {
      error:
        | string
        | string[]
        | { code?: number | string; message: string | string[] };
    };
  };
  status: number;
  error: object;
  message: string;
}

interface INormalizedError {
  success: boolean;
  message: string;
  errorMessage: string;
  errorCode: string;
  status: number;
}

function isConnectionError(
  error: IServiceError | IConnectionError
): error is IConnectionError {
  //   return Object.values(ConnectionErrorCodes).includes(
  //     (error as IConnectionError).code
  //   );
  return !(error as any).response; //  if response not present in error, its usually a connection error or timeout.
}
function isServiceError(
  error: IServiceError | IServiceError
): error is IServiceError {
  return typeof (error as IServiceError).success === "boolean";
}

const normalizeError = (
  error: IServiceError | IConnectionError
): INormalizedError => {
  if (isConnectionError(error)) {
    return {
      success: false,
      message: `RPC_ERROR: ${error.message} while hitting ${error.config.url}`,
      errorMessage: error.stack,
      errorCode: error.code,
      status: 500,
    };
  } else {
    let errorMessage: string = "Unhandled error";
    if (Array.isArray(error.response.data.error)) {
      errorMessage = error.response.data.error.join(", ");
    } else if (typeof error.response.data.error === "string") {
      errorMessage = error.response.data.error;
    } else if (typeof error.response.data.error === "object") {
      errorMessage = JSON.stringify(error.response.data.error.message);
    } else {
      errorMessage = JSON.stringify(error.response.data);
    }
    return {
      success: false,
      message: `RPC_ERROR: ${error.message}`,
      errorMessage,
      errorCode: R.pathOr(
        error.status || 500,
        ["response", "data", "error", "code"],
        error
      ),
      status: R.pathOr(503, ["response", "status"], error),
    };
  }
};

// TODO: handle error response in a better way
// desc: had to add another key "errorCode" in httpErrors.
const createHttpError = (error: INormalizedError): HttpError => {
  // logger.error(ErrorMessage("ERROR", error.message))
  const specificError = new httpErrors[error.status](
    Message(error.errorMessage)
  ) as HttpError;
  specificError.errorCode = error.errorCode;
  return specificError;
};

export const createLegacyRPCHandler = (serviceName: string, appLogger) => {
  return (err) => {
    const normalisedError = normalizeError(err);
    appLogger.error(`[${serviceName} RPC]: ${JSON.stringify(normalisedError)}`);
    return createHttpError(normalisedError) as any;
  };
};

const Message = (code: string, reasons?: string, ...args: string[]) => {
  const wrap = [code];
  if (reasons) {
    wrap.push(reasons);
  }
  if (args.length > 0) {
    wrap.push(args.join(" - "));
  }
  return wrap.join(" - ");
};
