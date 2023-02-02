"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoaLoggerMiddlewares = void 0;
const morgan = require("koa-morgan");
const common_1 = require("../common/common");
var KoaLoggerMiddlewares;
(function (KoaLoggerMiddlewares) {
    /** prepare custom morgan tokens */
    morgan.token("o4s-req-details", common_1.getRequestDetails);
    morgan.token("o4s-real-ip", common_1.getRealIp);
    /**
     * Error logger middleware
     */
    KoaLoggerMiddlewares.ErrorLoggerMiddleware = morgan((0, common_1.getFormatString)(), {
        skip: common_1.IsErrorResponse,
        stream: process.stderr,
    });
    /**
     * Success logger middleware
     */
    KoaLoggerMiddlewares.SuccessLoggerMiddleware = morgan((0, common_1.getFormatString)(), {
        skip: common_1.IsSuccessResponse,
        stream: process.stdout,
    });
})(KoaLoggerMiddlewares = exports.KoaLoggerMiddlewares || (exports.KoaLoggerMiddlewares = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29hLWxvZ2dlci5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2tvYS1sb2dnZXIubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsNkNBTTBCO0FBRTFCLElBQWlCLG9CQUFvQixDQW9CcEM7QUFwQkQsV0FBaUIsb0JBQW9CO0lBQ25DLG1DQUFtQztJQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLDBCQUFpQixDQUFDLENBQUM7SUFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsa0JBQVMsQ0FBQyxDQUFDO0lBRXZDOztPQUVHO0lBQ1UsMENBQXFCLEdBQUcsTUFBTSxDQUFDLElBQUEsd0JBQWUsR0FBRSxFQUFFO1FBQzdELElBQUksRUFBRSx3QkFBZTtRQUNyQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07S0FDdkIsQ0FBQyxDQUFDO0lBRUg7O09BRUc7SUFDVSw0Q0FBdUIsR0FBRyxNQUFNLENBQUMsSUFBQSx3QkFBZSxHQUFFLEVBQUU7UUFDL0QsSUFBSSxFQUFFLDBCQUFpQjtRQUN2QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07S0FDdkIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQXBCZ0Isb0JBQW9CLEdBQXBCLDRCQUFvQixLQUFwQiw0QkFBb0IsUUFvQnBDIn0=