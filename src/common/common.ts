const logFormatString =
  ":o4s-real-ip :remote-user :method :url HTTP/:http-version - :status :res[content-type] :res[content-length] - :response-time ms REQUEST_DETAILS - :o4s-req-details";

/**
 * Get Request Details
 * @param req
 * @returns
 */
export const getRequestDetails = (framework: "koa" | "express") => {
  if (framework === "express") {
    return (req) => {
      return JSON.stringify({
        headers: req.headers,
        body: req.body,
        query: req.query,
        params: req.params,
      });
    };
  } else {
    return (req) => {
      return JSON.stringify({
        headers: req.headers,
        body: req.body,
        query: req.query,
        params: req.ctx.params, // TODO: params in koa are not parsed.
      });
    };
  }
};

/**
 * Get real ip
 * @param req
 * @returns
 */
export const getRealIp = (framework: "koa" | "express") => {
  if (framework === "express") {
    return (req) => {
      return req.connection.remoteAddress || "";
    };
  } else {
    return (req) => {
      return req.ctx.request.ip || "";
    };
  }
};

/**
 * Get the log formatting string
 * @returns
 */
export const getFormatString = () => {
  return logFormatString;
};

/**
 * Check if response is error or not
 * @param req
 * @param res
 * @returns
 */
export const IsErrorResponse = (req, res) => {
  if (req.skipLogging) {
    return true;
  }

  return res.statusCode < 400;
};

/**
 * Check if response is success or not
 * @param req
 * @param res
 * @returns
 */
export const IsSuccessResponse = (req, res) => {
  if (req.skipLogging) {
    return true;
  }

  return res.statusCode >= 400;
};
