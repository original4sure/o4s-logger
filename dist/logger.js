"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const middlewares_1 = require("./middlewares");
var logger;
(function (logger_1) {
    let logger;
    const getLogger = () => {
        if (!logger) {
            logger = (0, winston_1.createLogger)({
                format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.prettyPrint(), winston_1.format.splat(), winston_1.format.simple()),
                transports: [new winston_1.transports.Console()],
            });
        }
        return logger;
    };
    logger_1.KoaSuccessLogger = middlewares_1.KoaLoggerMiddlewares.SuccessLoggerMiddleware;
    logger_1.KoaErrorLogger = middlewares_1.KoaLoggerMiddlewares.ErrorLoggerMiddleware;
    logger_1.ExpressSuccessLogger = middlewares_1.ExpressLoggerMiddlewares.SuccessLoggerMiddleware;
    logger_1.ExpressErrorLogger = middlewares_1.ExpressLoggerMiddlewares.ErrorLoggerMiddleware;
    logger_1.info = (data) => getLogger().info(data);
    logger_1.error = (err) => getLogger().error(err);
    logger_1.errorStream = {
        write: (message, encoding) => {
            logger_1.info(message);
        },
    };
    logger_1.successStream = {
        write: (message, encoding) => {
            logger_1.error(message);
        },
    };
})(logger = exports.logger || (exports.logger = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBbUU7QUFDbkUsK0NBQStFO0FBRS9FLElBQWlCLE1BQU0sQ0F5Q3RCO0FBekNELFdBQWlCLFFBQU07SUFDckIsSUFBSSxNQUFjLENBQUM7SUFFbkIsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBQSxzQkFBWSxFQUFDO2dCQUNwQixNQUFNLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLENBQ3BCLGdCQUFNLENBQUMsUUFBUSxFQUFFLEVBQ2pCLGdCQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCLGdCQUFNLENBQUMsS0FBSyxFQUFFLEVBQ2QsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FDaEI7Z0JBQ0QsVUFBVSxFQUFFLENBQUMsSUFBSSxvQkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRVcseUJBQWdCLEdBQUcsa0NBQW9CLENBQUMsdUJBQXVCLENBQUM7SUFDaEUsdUJBQWMsR0FBRyxrQ0FBb0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUU1RCw2QkFBb0IsR0FDL0Isc0NBQXdCLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsMkJBQWtCLEdBQzdCLHNDQUF3QixDQUFDLHFCQUFxQixDQUFDO0lBRXBDLGFBQUksR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLGNBQUssR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTdDLG9CQUFXLEdBQUc7UUFDekIsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQzNCLFNBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hCLENBQUM7S0FDRixDQUFDO0lBRVcsc0JBQWEsR0FBRztRQUMzQixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDM0IsU0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakIsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDLEVBekNnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUF5Q3RCIn0=