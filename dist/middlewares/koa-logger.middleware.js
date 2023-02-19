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
    const initMorganTokens = () => {
        /** prepare custom morgan tokens */
        morgan.token("o4s-req-details", (0, common_1.getRequestDetails)("koa"));
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
    KoaLoggerMiddlewares.getSuccessLoggerMiddleware = () => {
        initMorganTokens();
        return SuccessLoggerMiddleware;
    };
    KoaLoggerMiddlewares.getErrorLoggerMiddleware = () => {
        initMorganTokens();
        return ErrorLoggerMiddleware;
    };
})(KoaLoggerMiddlewares = exports.KoaLoggerMiddlewares || (exports.KoaLoggerMiddlewares = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29hLWxvZ2dlci5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2tvYS1sb2dnZXIubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBeUM7QUFDekMsNkNBTTBCO0FBQzFCLHNDQUFtQztBQUVuQyxJQUFpQixvQkFBb0IsQ0E2RHBDO0FBN0RELFdBQWlCLG9CQUFvQjtJQUNuQyxTQUFTLE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBWTtRQUMxQyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQy9CLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxtQ0FBbUM7SUFDbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUN0QyxNQUFNLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFFcEM7O09BRUc7SUFDSCxNQUFNLGdCQUFnQixHQUFHLEdBQUcsRUFBRTtRQUM1QixtQ0FBbUM7UUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFBLDBCQUFpQixFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBQSxrQkFBUyxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0lBRUY7O09BRUc7SUFDSCxNQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxJQUFBLHdCQUFlLEdBQUUsRUFBRTtRQUN0RCxJQUFJLEVBQUUsd0JBQWU7UUFDckIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2pCLGVBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUg7O09BRUc7SUFDSCxNQUFNLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxJQUFBLHdCQUFlLEdBQUUsRUFBRTtRQUN4RCxJQUFJLEVBQUUsMEJBQWlCO1FBQ3ZCLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNqQixlQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVVLCtDQUEwQixHQUFHLEdBQUcsRUFBRTtRQUM3QyxnQkFBZ0IsRUFBRSxDQUFDO1FBRW5CLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRVcsNkNBQXdCLEdBQUcsR0FBRyxFQUFFO1FBQzNDLGdCQUFnQixFQUFFLENBQUM7UUFFbkIsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFDSixDQUFDLEVBN0RnQixvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQTZEcEMifQ==