"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressLoggerMiddlewares = void 0;
const morgan = require("morgan");
const common_1 = require("../common/common");
const logger_1 = require("../logger");
var ExpressLoggerMiddlewares;
(function (ExpressLoggerMiddlewares) {
    /**
     * init the express morgan tokens
     */
    const initMorganTokens = () => {
        /** prepare custom morgan tokens */
        morgan.token("o4s-req-details", (req) => {
            return JSON.stringify({
                headers: req.headers,
                body: req.body,
                query: req.query,
                params: req.params,
            });
        });
        morgan.token("o4s-real-ip", (req) => {
            return req.connection.remoteAddress || "";
        });
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
    ExpressLoggerMiddlewares.getSuccessLoggerMiddleware = () => {
        initMorganTokens();
        return SuccessLoggerMiddleware;
    };
    ExpressLoggerMiddlewares.getErrorLoggerMiddleware = () => {
        initMorganTokens();
        return ErrorLoggerMiddleware;
    };
})(ExpressLoggerMiddlewares = exports.ExpressLoggerMiddlewares || (exports.ExpressLoggerMiddlewares = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1sb2dnZXIubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9leHByZXNzLWxvZ2dlci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFpQztBQUNqQyw2Q0FJMEI7QUFDMUIsc0NBQW1DO0FBRW5DLElBQWlCLHdCQUF3QixDQXVEeEM7QUF2REQsV0FBaUIsd0JBQXdCO0lBQ3ZDOztPQUVHO0lBQ0gsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7UUFDNUIsbUNBQW1DO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztnQkFDcEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2dCQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztnQkFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2FBQ25CLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNsQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGOztPQUVHO0lBQ0gsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsSUFBQSx3QkFBZSxHQUFFLEVBQUU7UUFDdEQsSUFBSSxFQUFFLHdCQUFlO1FBQ3JCLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNqQixlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVIOztPQUVHO0lBQ0gsTUFBTSx1QkFBdUIsR0FBRyxNQUFNLENBQUMsSUFBQSx3QkFBZSxHQUFFLEVBQUU7UUFDeEQsSUFBSSxFQUFFLDBCQUFpQjtRQUN2QixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDakIsZUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixDQUFDO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFVSxtREFBMEIsR0FBRyxHQUFHLEVBQUU7UUFDN0MsZ0JBQWdCLEVBQUUsQ0FBQztRQUVuQixPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUVXLGlEQUF3QixHQUFHLEdBQUcsRUFBRTtRQUMzQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRW5CLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxFQXZEZ0Isd0JBQXdCLEdBQXhCLGdDQUF3QixLQUF4QixnQ0FBd0IsUUF1RHhDIn0=