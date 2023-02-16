"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSuccessResponse = exports.IsErrorResponse = exports.getFormatString = void 0;
const logFormatString = ":o4s-real-ip :remote-user :method :url HTTP/:http-version - :status :res[content-type] :res[content-length] - :response-time ms REQUEST_DETAILS - :o4s-req-details";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxlQUFlLEdBQ25CLG9LQUFvSyxDQUFDO0FBRXZLOzs7R0FHRztBQUNJLE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRTtJQUNsQyxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDLENBQUM7QUFGVyxRQUFBLGVBQWUsbUJBRTFCO0FBRUY7Ozs7O0dBS0c7QUFDSSxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMxQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUZXLFFBQUEsZUFBZSxtQkFFMUI7QUFFRjs7Ozs7R0FLRztBQUNJLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDNUMsT0FBTyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFGVyxRQUFBLGlCQUFpQixxQkFFNUIifQ==