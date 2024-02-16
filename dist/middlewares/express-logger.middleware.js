"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressLoggerMiddlewares = void 0;
const morgan = require("morgan");
const common_1 = require("../common/common");
const logger_1 = require("../logger");
var ExpressLoggerMiddlewares;
(function (ExpressLoggerMiddlewares) {
    /**
     * init morgan tokens
     */
    const initMorganTokens = (reqFilter) => {
        /** prepare custom morgan tokens */
        morgan.token("o4s-req-details", (0, common_1.getRequestDetails)("express", reqFilter));
        morgan.token("o4s-real-ip", (0, common_1.getRealIp)("express"));
    };
    /**
     * Error logger middleware
     */
    const ErrorLoggerMiddleware = morgan((0, common_1.getFormatString)(), {
        skip: common_1.IsErrorResponse,
        stream: {
            write: (message) => {
                logger_1.logger.error(message);
            },
        },
    });
    /**
     * Success logger middleware
     */
    const SuccessLoggerMiddleware = morgan((0, common_1.getFormatString)(), {
        skip: common_1.IsSuccessResponse,
        stream: {
            write: (message) => {
                logger_1.logger.info(message);
            },
        },
    });
    ExpressLoggerMiddlewares.getSuccessLoggerMiddleware = (reqFilter) => {
        initMorganTokens(reqFilter);
        return SuccessLoggerMiddleware;
    };
    ExpressLoggerMiddlewares.getErrorLoggerMiddleware = (reqFilter) => {
        initMorganTokens(reqFilter);
        return ErrorLoggerMiddleware;
    };
})(ExpressLoggerMiddlewares = exports.ExpressLoggerMiddlewares || (exports.ExpressLoggerMiddlewares = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1sb2dnZXIubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9leHByZXNzLWxvZ2dlci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFpQztBQUNqQyw2Q0FNMEI7QUFDMUIsc0NBQW1DO0FBRW5DLElBQWlCLHdCQUF3QixDQTZDeEM7QUE3Q0QsV0FBaUIsd0JBQXdCO0lBQ3ZDOztPQUVHO0lBQ0gsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFNBQWUsRUFBRSxFQUFFO1FBQzNDLG1DQUFtQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLElBQUEsMEJBQWlCLEVBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBQSxrQkFBUyxFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDO0lBRUY7O09BRUc7SUFDSCxNQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxJQUFBLHdCQUFlLEdBQUUsRUFBRTtRQUN0RCxJQUFJLEVBQUUsd0JBQWU7UUFDckIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2pCLGVBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUg7O09BRUc7SUFDSCxNQUFNLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxJQUFBLHdCQUFlLEdBQUUsRUFBRTtRQUN4RCxJQUFJLEVBQUUsMEJBQWlCO1FBQ3ZCLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNqQixlQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVVLG1EQUEwQixHQUFHLENBQUMsU0FBZSxFQUFFLEVBQUU7UUFDNUQsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDLENBQUM7SUFFVyxpREFBd0IsR0FBRyxDQUFDLFNBQWUsRUFBRSxFQUFFO1FBQzFELGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVCLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxFQTdDZ0Isd0JBQXdCLEdBQXhCLGdDQUF3QixLQUF4QixnQ0FBd0IsUUE2Q3hDIn0=