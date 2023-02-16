const logFormatString =
  ":o4s-real-ip :remote-user :method :url HTTP/:http-version - :status :res[content-type] :res[content-length] - :response-time ms REQUEST_DETAILS - :o4s-req-details";

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
  return res.statusCode < 400;
};

/**
 * Check if response is success or not
 * @param req
 * @param res
 * @returns
 */
export const IsSuccessResponse = (req, res) => {
  return res.statusCode >= 400;
};
