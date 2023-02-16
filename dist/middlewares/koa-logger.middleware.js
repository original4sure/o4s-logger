"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoaLoggerMiddlewares = void 0;
const morgan = require("morgan");
const common_1 = require("../common/common");
const logger_1 = require("../logger");
var KoaLoggerMiddlewares;
(function (KoaLoggerMiddlewares) {
    /**
     * init the express morgan tokens
     */
    const initMorganTokens = () => {
        /** prepare custom morgan tokens */
        morgan.token("o4s-req-details", (ctx) => {
            return JSON.stringify({
                headers: ctx.headers,
                body: ctx.body,
                query: ctx.query,
                params: ctx.params,
            });
        });
        morgan.token("o4s-real-ip", (ctx) => {
            return ctx.request.ip || "";
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
    KoaLoggerMiddlewares.getSuccessLoggerMiddleware = () => {
        initMorganTokens();
        return SuccessLoggerMiddleware;
    };
    KoaLoggerMiddlewares.getErrorLoggerMiddleware = () => {
        initMorganTokens();
        return ErrorLoggerMiddleware;
    };
})(KoaLoggerMiddlewares = exports.KoaLoggerMiddlewares || (exports.KoaLoggerMiddlewares = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29hLWxvZ2dlci5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2tvYS1sb2dnZXIubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBaUM7QUFDakMsNkNBSTBCO0FBQzFCLHNDQUFtQztBQUVuQyxJQUFpQixvQkFBb0IsQ0F1RHBDO0FBdkRELFdBQWlCLG9CQUFvQjtJQUNuQzs7T0FFRztJQUNILE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO1FBQzVCLG1DQUFtQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNwQixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7Z0JBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTthQUNuQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRjs7T0FFRztJQUNILE1BQU0scUJBQXFCLEdBQUcsTUFBTSxDQUFDLElBQUEsd0JBQWUsR0FBRSxFQUFFO1FBQ3RELElBQUksRUFBRSx3QkFBZTtRQUNyQixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDakIsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFSDs7T0FFRztJQUNILE1BQU0sdUJBQXVCLEdBQUcsTUFBTSxDQUFDLElBQUEsd0JBQWUsR0FBRSxFQUFFO1FBQ3hELElBQUksRUFBRSwwQkFBaUI7UUFDdkIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2pCLGVBQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsQ0FBQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRVUsK0NBQTBCLEdBQUcsR0FBRyxFQUFFO1FBQzdDLGdCQUFnQixFQUFFLENBQUM7UUFFbkIsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDLENBQUM7SUFFVyw2Q0FBd0IsR0FBRyxHQUFHLEVBQUU7UUFDM0MsZ0JBQWdCLEVBQUUsQ0FBQztRQUVuQixPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUNKLENBQUMsRUF2RGdCLG9CQUFvQixHQUFwQiw0QkFBb0IsS0FBcEIsNEJBQW9CLFFBdURwQyJ9