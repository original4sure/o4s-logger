"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressLoggerMiddlewares = void 0;
const morgan = require("morgan");
const common_1 = require("../common/common");
const logger_1 = require("../logger");
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
        stream: {
            write: (message, encoding) => {
                logger_1.logger.error(message);
            },
        },
    });
    /**
     * Success logger middleware
     */
    ExpressLoggerMiddlewares.SuccessLoggerMiddleware = morgan((0, common_1.getFormatString)(), {
        skip: common_1.IsSuccessResponse,
        stream: {
            write: (message, encoding) => {
                logger_1.logger.info(message);
            },
        },
    });
})(ExpressLoggerMiddlewares = exports.ExpressLoggerMiddlewares || (exports.ExpressLoggerMiddlewares = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1sb2dnZXIubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9leHByZXNzLWxvZ2dlci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFpQztBQUNqQyw2Q0FNMEI7QUFDMUIsc0NBQW1DO0FBRW5DLElBQWlCLHdCQUF3QixDQTRCeEM7QUE1QkQsV0FBaUIsd0JBQXdCO0lBQ3ZDLG1DQUFtQztJQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLDBCQUFpQixDQUFDLENBQUM7SUFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsa0JBQVMsQ0FBQyxDQUFDO0lBRXZDOztPQUVHO0lBQ1UsOENBQXFCLEdBQUcsTUFBTSxDQUFDLElBQUEsd0JBQWUsR0FBRSxFQUFFO1FBQzdELElBQUksRUFBRSx3QkFBZTtRQUNyQixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQzNCLGVBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUg7O09BRUc7SUFDVSxnREFBdUIsR0FBRyxNQUFNLENBQUMsSUFBQSx3QkFBZSxHQUFFLEVBQUU7UUFDL0QsSUFBSSxFQUFFLDBCQUFpQjtRQUN2QixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQzNCLGVBQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQTVCZ0Isd0JBQXdCLEdBQXhCLGdDQUF3QixLQUF4QixnQ0FBd0IsUUE0QnhDIn0=