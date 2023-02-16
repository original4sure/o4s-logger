"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoaLoggerMiddlewares = void 0;
const morgan = require("koa-morgan");
const config_1 = require("../config");
const common_1 = require("../common/common");
const logger_1 = require("../logger");
config_1.loggerConfig.getLoggerConfig();
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
        stream: {
            write: (message, encoding) => {
                logger_1.logger.error(message);
            },
        },
    });
    /**
     * Success logger middleware
     */
    KoaLoggerMiddlewares.SuccessLoggerMiddleware = morgan((0, common_1.getFormatString)(), {
        skip: common_1.IsSuccessResponse,
        stream: {
            write: (message, encoding) => {
                logger_1.logger.info(message);
            },
        },
    });
})(KoaLoggerMiddlewares = exports.KoaLoggerMiddlewares || (exports.KoaLoggerMiddlewares = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29hLWxvZ2dlci5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2tvYS1sb2dnZXIubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsc0NBQXlDO0FBQ3pDLDZDQU0wQjtBQUMxQixzQ0FBbUM7QUFFbkMscUJBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMvQixJQUFpQixvQkFBb0IsQ0E0QnBDO0FBNUJELFdBQWlCLG9CQUFvQjtJQUNuQyxtQ0FBbUM7SUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSwwQkFBaUIsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGtCQUFTLENBQUMsQ0FBQztJQUV2Qzs7T0FFRztJQUNVLDBDQUFxQixHQUFHLE1BQU0sQ0FBQyxJQUFBLHdCQUFlLEdBQUUsRUFBRTtRQUM3RCxJQUFJLEVBQUUsd0JBQWU7UUFDckIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO2dCQUMzQixlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVIOztPQUVHO0lBQ1UsNENBQXVCLEdBQUcsTUFBTSxDQUFDLElBQUEsd0JBQWUsR0FBRSxFQUFFO1FBQy9ELElBQUksRUFBRSwwQkFBaUI7UUFDdkIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO2dCQUMzQixlQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsRUE1QmdCLG9CQUFvQixHQUFwQiw0QkFBb0IsS0FBcEIsNEJBQW9CLFFBNEJwQyJ9