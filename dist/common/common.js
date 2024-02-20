"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSuccessResponse = exports.IsErrorResponse = exports.getFormatString = exports.getRealIp = exports.getRequestDetails = void 0;
const logFormatString = ":o4s-real-ip :remote-user :method :url HTTP/:http-version - :status :res[content-type] :res[content-length] - :response-time ms REQUEST_DETAILS - :o4s-req-details";
/**
 * Get Request Details
 * @param req
 * @returns
 */
const getRequestDetails = (framework, reqFilter) => {
    if (framework === "express") {
        return (req) => {
            if (reqFilter) {
                req = reqFilter(req);
            }
            return JSON.stringify({
                headers: req.headers,
                body: req.body,
                query: req.query,
                params: req.params,
            });
        };
    }
    else {
        return (req) => {
            if (reqFilter) {
                req = reqFilter(req);
            }
            return JSON.stringify({
                headers: req.headers,
                body: req.body,
                query: req.query,
                params: req.ctx.params, // TODO: params in koa are not parsed.
            });
        };
    }
};
exports.getRequestDetails = getRequestDetails;
/**
 * Get real ip
 * @param req
 * @returns
 */
const getRealIp = (framework) => {
    if (framework === "express") {
        return (req) => {
            return req.connection.remoteAddress || "";
        };
    }
    else {
        return (req) => {
            return req.ctx.request.ip || "";
        };
    }
};
exports.getRealIp = getRealIp;
/**
 * Get the log formatting string
 * @returns
 */
const getFormatString = () => {
    return logFormatString;
};
exports.getFormatString = getFormatString;
/**
 * Check if response is error or not
 * @param req
 * @param res
 * @returns
 */
const IsErrorResponse = (req, res) => {
    if (req.skipLogging) {
        return true;
    }
    return res.statusCode < 400;
};
exports.IsErrorResponse = IsErrorResponse;
/**
 * Check if response is success or not
 * @param req
 * @param res
 * @returns
 */
const IsSuccessResponse = (req, res) => {
    if (req.skipLogging) {
        return true;
    }
    return res.statusCode >= 400;
};
exports.IsSuccessResponse = IsSuccessResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBTSxlQUFlLEdBQ25CLG9LQUFvSyxDQUFDO0FBRXZLOzs7O0dBSUc7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQy9CLFNBQTRCLEVBQzVCLFNBQXdCLEVBQ3hCLEVBQUU7SUFDRixJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7UUFDM0IsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2IsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0QjtZQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDcEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO2dCQUNoQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07YUFDbkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0tBQ0g7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNiLElBQUksU0FBUyxFQUFFO2dCQUNiLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEI7WUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztnQkFDcEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2dCQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztnQkFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHNDQUFzQzthQUMvRCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQztBQS9CVyxRQUFBLGlCQUFpQixxQkErQjVCO0FBRUY7Ozs7R0FJRztBQUNJLE1BQU0sU0FBUyxHQUFHLENBQUMsU0FBNEIsRUFBRSxFQUFFO0lBQ3hELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtRQUMzQixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztRQUM1QyxDQUFDLENBQUM7S0FDSDtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDO0FBVlcsUUFBQSxTQUFTLGFBVXBCO0FBRUY7OztHQUdHO0FBQ0ksTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO0lBQ2xDLE9BQU8sZUFBZSxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQUZXLFFBQUEsZUFBZSxtQkFFMUI7QUFFRjs7Ozs7R0FLRztBQUNJLE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzFDLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFOVyxRQUFBLGVBQWUsbUJBTTFCO0FBRUY7Ozs7O0dBS0c7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzVDLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFOVyxRQUFBLGlCQUFpQixxQkFNNUIifQ==