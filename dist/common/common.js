"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSuccessResponse = exports.IsErrorResponse = exports.getFormatString = void 0;
const logFormatString = ":o4s-real-ip :remote-user :method :url HTTP/:http-version - :status :res[content-type] :res[content-length] - :response-time ms REQUEST_DETAILS - :o4s-req-details";
// /**
//  * Get Request Details
//  * @param req
//  * @returns
//  */
// export const getRequestDetails = (framework: "koa" | "express") => {
//   if (framework === "express") {
//     return
//   } else {
//     return
// };
// /**
//  * Get real ip
//  * @param req
//  * @returns
//  */
// export const getRealIp = (framework: "koa" | "express") => {
//   if (framework === "express") {
//     return ;
//   } else {
//     return (ctx) => {
//       return ctx.request.ip || "";
//     };
//   }
// };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxlQUFlLEdBQ25CLG9LQUFvSyxDQUFDO0FBRXZLLE1BQU07QUFDTix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCxNQUFNO0FBQ04sdUVBQXVFO0FBQ3ZFLG1DQUFtQztBQUNuQyxhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixLQUFLO0FBRUwsTUFBTTtBQUNOLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkLE1BQU07QUFDTiwrREFBK0Q7QUFDL0QsbUNBQW1DO0FBQ25DLGVBQWU7QUFDZixhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLHFDQUFxQztBQUNyQyxTQUFTO0FBQ1QsTUFBTTtBQUNOLEtBQUs7QUFFTDs7O0dBR0c7QUFDSSxNQUFNLGVBQWUsR0FBRyxHQUFHLEVBQUU7SUFDbEMsT0FBTyxlQUFlLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRlcsUUFBQSxlQUFlLG1CQUUxQjtBQUVGOzs7OztHQUtHO0FBQ0ksTUFBTSxlQUFlLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDMUMsT0FBTyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFGVyxRQUFBLGVBQWUsbUJBRTFCO0FBRUY7Ozs7O0dBS0c7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzVDLE9BQU8sR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBRlcsUUFBQSxpQkFBaUIscUJBRTVCIn0=