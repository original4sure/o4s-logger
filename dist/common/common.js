"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSuccessResponse = exports.IsErrorResponse = exports.getFormatString = exports.getRealIp = exports.getRequestDetails = void 0;
const logFormatString = ":o4s-real-ip :remote-user :method :url HTTP/:http-version - :status :res[content-type] :res[content-length] - :response-time ms REQUEST_DETAILS - :o4s-req-details";
/**
 * Get Request Details
 * @param req
 * @returns
 */
const getRequestDetails = (framework) => {
    if (framework === "express") {
        return (req) => {
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
            // tslint:disable
            console.log(req.ctx);
            return JSON.stringify({
                headers: req.headers,
                body: req.body,
                query: req.query,
                params: req.ctx.params,
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
    return res.statusCode >= 400;
};
exports.IsSuccessResponse = IsSuccessResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxlQUFlLEdBQ25CLG9LQUFvSyxDQUFDO0FBRXZLOzs7O0dBSUc7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQUMsU0FBNEIsRUFBRSxFQUFFO0lBQ2hFLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtRQUMzQixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztnQkFDcEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2dCQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztnQkFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2FBQ25CLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztLQUNIO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDYixpQkFBaUI7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNwQixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7Z0JBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU07YUFDdkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUM7QUF0QlcsUUFBQSxpQkFBaUIscUJBc0I1QjtBQUVGOzs7O0dBSUc7QUFDSSxNQUFNLFNBQVMsR0FBRyxDQUFDLFNBQTRCLEVBQUUsRUFBRTtJQUN4RCxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7UUFDM0IsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDO0tBQ0g7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQztBQVZXLFFBQUEsU0FBUyxhQVVwQjtBQUVGOzs7R0FHRztBQUNJLE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRTtJQUNsQyxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDLENBQUM7QUFGVyxRQUFBLGVBQWUsbUJBRTFCO0FBRUY7Ozs7O0dBS0c7QUFDSSxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMxQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUZXLFFBQUEsZUFBZSxtQkFFMUI7QUFFRjs7Ozs7R0FLRztBQUNJLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDNUMsT0FBTyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFGVyxRQUFBLGlCQUFpQixxQkFFNUIifQ==