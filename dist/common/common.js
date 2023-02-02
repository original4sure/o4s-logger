"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSuccessResponse = exports.IsErrorResponse = exports.getFormatString = exports.getRealIp = exports.getRequestDetails = void 0;
const logFormatString = ":o4s-real-ip :remote-user :method :url HTTP/:http-version - :status :res[content-type] :res[content-length] - :response-time ms REQUEST_DETAILS - :o4s-req-details";
/**
 * Get Request Details
 * @param req
 * @returns
 */
const getRequestDetails = (req) => {
    return JSON.stringify({
        headers: req.headers,
        body: req.body,
        query: req.query,
        params: req.params,
    });
};
exports.getRequestDetails = getRequestDetails;
/**
 * Get real ip
 * @param req
 * @returns
 */
const getRealIp = (req) => {
    return req.connection.remoteAddress || "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxlQUFlLEdBQ25CLG9LQUFvSyxDQUFDO0FBRXZLOzs7O0dBSUc7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3BCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztRQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7UUFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7UUFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO0tBQ25CLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVBXLFFBQUEsaUJBQWlCLHFCQU81QjtBQUVGOzs7O0dBSUc7QUFDSSxNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQy9CLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO0FBQzVDLENBQUMsQ0FBQztBQUZXLFFBQUEsU0FBUyxhQUVwQjtBQUVGOzs7R0FHRztBQUNJLE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRTtJQUNsQyxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDLENBQUM7QUFGVyxRQUFBLGVBQWUsbUJBRTFCO0FBRUY7Ozs7O0dBS0c7QUFDSSxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMxQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUZXLFFBQUEsZUFBZSxtQkFFMUI7QUFFRjs7Ozs7R0FLRztBQUNJLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDNUMsT0FBTyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFGVyxRQUFBLGlCQUFpQixxQkFFNUIifQ==