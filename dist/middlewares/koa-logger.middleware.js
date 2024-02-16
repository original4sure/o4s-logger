"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoaLoggerMiddlewares = void 0;
const originalMorgan = require("morgan");
const common_1 = require("../common/common");
const logger_1 = require("../logger");
var KoaLoggerMiddlewares;
(function (KoaLoggerMiddlewares) {
    function morgan(format, options) {
        const fn = originalMorgan(format, options);
        return (ctx, next) => {
            return new Promise((resolve, reject) => {
                ctx.request.ctx = ctx;
                fn(ctx.request, ctx.res, (err) => {
                    err ? reject(err) : resolve(ctx);
                });
            }).then(next);
        };
    }
    /** prepare custom morgan tokens */
    morgan.compile = originalMorgan.compile;
    morgan.format = originalMorgan.format;
    morgan.token = originalMorgan.token;
    /**
     * init morgan token
     */
    const initMorganTokens = (reqFilter) => {
        /** prepare custom morgan tokens */
        morgan.token("o4s-req-details", (0, common_1.getRequestDetails)("koa", reqFilter));
        morgan.token("o4s-real-ip", (0, common_1.getRealIp)("koa"));
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
    KoaLoggerMiddlewares.getSuccessLoggerMiddleware = (reqFilter) => {
        initMorganTokens(reqFilter);
        return SuccessLoggerMiddleware;
    };
    KoaLoggerMiddlewares.getErrorLoggerMiddleware = (reqFilter) => {
        initMorganTokens(reqFilter);
        return ErrorLoggerMiddleware;
    };
})(KoaLoggerMiddlewares = exports.KoaLoggerMiddlewares || (exports.KoaLoggerMiddlewares = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29hLWxvZ2dlci5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2tvYS1sb2dnZXIubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBeUM7QUFDekMsNkNBTTBCO0FBQzFCLHNDQUFtQztBQUVuQyxJQUFpQixvQkFBb0IsQ0E2RHBDO0FBN0RELFdBQWlCLG9CQUFvQjtJQUNuQyxTQUFTLE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBWTtRQUMxQyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQy9CLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxtQ0FBbUM7SUFDbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUN0QyxNQUFNLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFFcEM7O09BRUc7SUFDSCxNQUFNLGdCQUFnQixHQUFHLENBQUMsU0FBZSxFQUFFLEVBQUU7UUFDM0MsbUNBQW1DO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBQSwwQkFBaUIsRUFBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFBLGtCQUFTLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUM7SUFFRjs7T0FFRztJQUNILE1BQU0scUJBQXFCLEdBQUcsTUFBTSxDQUFDLElBQUEsd0JBQWUsR0FBRSxFQUFFO1FBQ3RELElBQUksRUFBRSx3QkFBZTtRQUNyQixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDakIsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFSDs7T0FFRztJQUNILE1BQU0sdUJBQXVCLEdBQUcsTUFBTSxDQUFDLElBQUEsd0JBQWUsR0FBRSxFQUFFO1FBQ3hELElBQUksRUFBRSwwQkFBaUI7UUFDdkIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2pCLGVBQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRVUsK0NBQTBCLEdBQUcsQ0FBQyxTQUFlLEVBQUUsRUFBRTtRQUM1RCxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QixPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUVXLDZDQUF3QixHQUFHLENBQUMsU0FBZSxFQUFFLEVBQUU7UUFDMUQsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFDSixDQUFDLEVBN0RnQixvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQTZEcEMifQ==