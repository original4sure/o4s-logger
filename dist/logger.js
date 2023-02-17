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
                format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.prettyPrint(), winston_1.format.splat(), winston_1.format.simple()),
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
var RequestLogger;
(function (RequestLogger) {
    RequestLogger.KoaSuccessLogger = middlewares_1.KoaLoggerMiddlewares.SuccessLoggerMiddleware;
    RequestLogger.KoaErrorLogger = middlewares_1.KoaLoggerMiddlewares.ErrorLoggerMiddleware;
    RequestLogger.ExpressSuccessLogger = middlewares_1.ExpressLoggerMiddlewares.SuccessLoggerMiddleware;
    RequestLogger.ExpressErrorLogger = middlewares_1.ExpressLoggerMiddlewares.ErrorLoggerMiddleware;
})(RequestLogger = exports.RequestLogger || (exports.RequestLogger = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FLaUI7QUFDakIsK0NBQStFO0FBQy9FLHFDQUF3QztBQUV4QyxJQUFpQixNQUFNLENBdUN0QjtBQXZDRCxXQUFpQixRQUFNO0lBQ3JCLElBQUksTUFBcUIsQ0FBQztJQUUxQixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sR0FBRyxJQUFBLHNCQUFZLEVBQUM7Z0JBQ3BCLEtBQUssRUFBRSxxQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVE7Z0JBQzlDLE1BQU0sRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FDcEIsZ0JBQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsRUFDcEIsZ0JBQU0sQ0FBQyxLQUFLLEVBQUUsRUFDZCxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUNoQjtnQkFDRCxVQUFVLEVBQUUsQ0FBQyxJQUFJLG9CQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFVyxjQUFLLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxhQUFJLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxhQUFJLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxhQUFJLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxnQkFBTyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsY0FBSyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsY0FBSyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0Msb0JBQVcsR0FBRztRQUN6QixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDM0IsU0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEIsQ0FBQztLQUNGLENBQUM7SUFFVyxzQkFBYSxHQUFHO1FBQzNCLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUMzQixTQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsRUF2Q2dCLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQXVDdEI7QUFFRCxJQUFpQixhQUFhLENBUTdCO0FBUkQsV0FBaUIsYUFBYTtJQUNmLDhCQUFnQixHQUFHLGtDQUFvQixDQUFDLHVCQUF1QixDQUFDO0lBQ2hFLDRCQUFjLEdBQUcsa0NBQW9CLENBQUMscUJBQXFCLENBQUM7SUFFNUQsa0NBQW9CLEdBQy9CLHNDQUF3QixDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLGdDQUFrQixHQUM3QixzQ0FBd0IsQ0FBQyxxQkFBcUIsQ0FBQztBQUNuRCxDQUFDLEVBUmdCLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBUTdCIn0=