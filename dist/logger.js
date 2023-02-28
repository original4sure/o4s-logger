"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLogger = exports.logger = void 0;
const winston_1 = require("winston");
const middlewares_1 = require("./middlewares");
const config_1 = require("./config");
var logger;
(function (logger_1) {
    let logger;
    const getLogger = () => {
        if (!logger) {
            logger = (0, winston_1.createLogger)({
                level: config_1.loggerConfig.getLoggerConfig().logLevel,
                format: winston_1.format.combine(winston_1.format.errors({ stack: true }), winston_1.format.colorize(), winston_1.format.prettyPrint(), winston_1.format.splat(), winston_1.format.simple()),
                transports: [new winston_1.transports.Console()],
            });
        }
        return logger;
    };
    logger_1.error = (data) => getLogger().error(data);
    logger_1.warn = (data) => getLogger().warn(data);
    logger_1.info = (data) => getLogger().info(data);
    logger_1.http = (data) => getLogger().http(data);
    logger_1.verbose = (data) => getLogger().verbose(data);
    logger_1.debug = (data) => getLogger().debug(data);
    logger_1.silly = (data) => getLogger().silly(data);
})(logger = exports.logger || (exports.logger = {}));
var RequestLogger;
(function (RequestLogger) {
    RequestLogger.KoaSuccessLogger = middlewares_1.KoaLoggerMiddlewares.getSuccessLoggerMiddleware;
    RequestLogger.KoaErrorLogger = middlewares_1.KoaLoggerMiddlewares.getErrorLoggerMiddleware;
    RequestLogger.ExpressSuccessLogger = middlewares_1.ExpressLoggerMiddlewares.getSuccessLoggerMiddleware;
    RequestLogger.ExpressErrorLogger = middlewares_1.ExpressLoggerMiddlewares.getErrorLoggerMiddleware;
})(RequestLogger = exports.RequestLogger || (exports.RequestLogger = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FLaUI7QUFDakIsK0NBQStFO0FBQy9FLHFDQUF3QztBQUV4QyxJQUFpQixNQUFNLENBNEJ0QjtBQTVCRCxXQUFpQixRQUFNO0lBQ3JCLElBQUksTUFBcUIsQ0FBQztJQUUxQixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sR0FBRyxJQUFBLHNCQUFZLEVBQUM7Z0JBQ3BCLEtBQUssRUFBRSxxQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVE7Z0JBQzlDLE1BQU0sRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FDcEIsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDOUIsZ0JBQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsRUFDcEIsZ0JBQU0sQ0FBQyxLQUFLLEVBQUUsRUFDZCxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUNoQjtnQkFDRCxVQUFVLEVBQUUsQ0FBQyxJQUFJLG9CQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFVyxjQUFLLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxhQUFJLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxhQUFJLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxhQUFJLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxnQkFBTyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsY0FBSyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsY0FBSyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUQsQ0FBQyxFQTVCZ0IsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBNEJ0QjtBQUVELElBQWlCLGFBQWEsQ0FTN0I7QUFURCxXQUFpQixhQUFhO0lBQ2YsOEJBQWdCLEdBQzNCLGtDQUFvQixDQUFDLDBCQUEwQixDQUFDO0lBQ3JDLDRCQUFjLEdBQUcsa0NBQW9CLENBQUMsd0JBQXdCLENBQUM7SUFFL0Qsa0NBQW9CLEdBQy9CLHNDQUF3QixDQUFDLDBCQUEwQixDQUFDO0lBQ3pDLGdDQUFrQixHQUM3QixzQ0FBd0IsQ0FBQyx3QkFBd0IsQ0FBQztBQUN0RCxDQUFDLEVBVGdCLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBUzdCIn0=