"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressLoggerMiddlewares = void 0;
const morgan = require("morgan");
const common_1 = require("../common/common");
var ExpressLoggerMiddlewares;
(function (ExpressLoggerMiddlewares) {
    /** prepare custom morgan tokens */
    morgan.token("o4s-req-details", common_1.getRequestDetails);
    morgan.token("o4s-real-ip", common_1.getRealIp);
    /**
     * Error logger middleware
     */
    ExpressLoggerMiddlewares.ErrorLoggerMiddleware = morgan((0, common_1.getFormatString)(), {
        skip: common_1.IsErrorResponse,
        stream: process.stderr,
    });
    /**
     * Success logger middleware
     */
    ExpressLoggerMiddlewares.SuccessLoggerMiddleware = morgan((0, common_1.getFormatString)(), {
        skip: common_1.IsSuccessResponse,
        stream: process.stdout,
    });
})(ExpressLoggerMiddlewares = exports.ExpressLoggerMiddlewares || (exports.ExpressLoggerMiddlewares = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1sb2dnZXIubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9leHByZXNzLWxvZ2dlci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFpQztBQUNqQyw2Q0FNMEI7QUFFMUIsSUFBaUIsd0JBQXdCLENBb0J4QztBQXBCRCxXQUFpQix3QkFBd0I7SUFDdkMsbUNBQW1DO0lBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsMEJBQWlCLENBQUMsQ0FBQztJQUNuRCxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxrQkFBUyxDQUFDLENBQUM7SUFFdkM7O09BRUc7SUFDVSw4Q0FBcUIsR0FBRyxNQUFNLENBQUMsSUFBQSx3QkFBZSxHQUFFLEVBQUU7UUFDN0QsSUFBSSxFQUFFLHdCQUFlO1FBQ3JCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtLQUN2QixDQUFDLENBQUM7SUFFSDs7T0FFRztJQUNVLGdEQUF1QixHQUFHLE1BQU0sQ0FBQyxJQUFBLHdCQUFlLEdBQUUsRUFBRTtRQUMvRCxJQUFJLEVBQUUsMEJBQWlCO1FBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtLQUN2QixDQUFDLENBQUM7QUFDTCxDQUFDLEVBcEJnQix3QkFBd0IsR0FBeEIsZ0NBQXdCLEtBQXhCLGdDQUF3QixRQW9CeEMifQ==