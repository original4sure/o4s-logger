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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1sb2dnZXIubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9leHByZXNzLWxvZ2dlci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFpQztBQUNqQyw2Q0FNMEI7QUFDMUIsc0NBQW1DO0FBRW5DLElBQWlCLHdCQUF3QixDQTZDeEM7QUE3Q0QsV0FBaUIsd0JBQXdCO0lBQ3ZDOztPQUVHO0lBQ0gsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFNBQXFCLEVBQUUsRUFBRTtRQUNqRCxtQ0FBbUM7UUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFBLDBCQUFpQixFQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUEsa0JBQVMsRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQztJQUVGOztPQUVHO0lBQ0gsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsSUFBQSx3QkFBZSxHQUFFLEVBQUU7UUFDdEQsSUFBSSxFQUFFLHdCQUFlO1FBQ3JCLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNqQixlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVIOztPQUVHO0lBQ0gsTUFBTSx1QkFBdUIsR0FBRyxNQUFNLENBQUMsSUFBQSx3QkFBZSxHQUFFLEVBQUU7UUFDeEQsSUFBSSxFQUFFLDBCQUFpQjtRQUN2QixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDakIsZUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixDQUFDO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFVSxtREFBMEIsR0FBRyxDQUFDLFNBQWUsRUFBRSxFQUFFO1FBQzVELGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVCLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRVcsaURBQXdCLEdBQUcsQ0FBQyxTQUFlLEVBQUUsRUFBRTtRQUMxRCxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QixPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUNKLENBQUMsRUE3Q2dCLHdCQUF3QixHQUF4QixnQ0FBd0IsS0FBeEIsZ0NBQXdCLFFBNkN4QyJ9