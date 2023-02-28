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
    logger_1.error = (...data) => getLogger().error(data);
    logger_1.warn = (...data) => getLogger().warn(data);
    logger_1.info = (...data) => getLogger().info(data);
    logger_1.http = (...data) => getLogger().http(data);
    logger_1.verbose = (...data) => getLogger().verbose(data);
    logger_1.debug = (...data) => getLogger().debug(data);
    logger_1.silly = (...data) => getLogger().silly(data);
})(logger = exports.logger || (exports.logger = {}));
var RequestLogger;
(function (RequestLogger) {
    RequestLogger.KoaSuccessLogger = middlewares_1.KoaLoggerMiddlewares.getSuccessLoggerMiddleware;
    RequestLogger.KoaErrorLogger = middlewares_1.KoaLoggerMiddlewares.getErrorLoggerMiddleware;
    RequestLogger.ExpressSuccessLogger = middlewares_1.ExpressLoggerMiddlewares.getSuccessLoggerMiddleware;
    RequestLogger.ExpressErrorLogger = middlewares_1.ExpressLoggerMiddlewares.getErrorLoggerMiddleware;
})(RequestLogger = exports.RequestLogger || (exports.RequestLogger = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FLaUI7QUFDakIsK0NBQStFO0FBQy9FLHFDQUF3QztBQUV4QyxJQUFpQixNQUFNLENBNEJ0QjtBQTVCRCxXQUFpQixRQUFNO0lBQ3JCLElBQUksTUFBcUIsQ0FBQztJQUUxQixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sR0FBRyxJQUFBLHNCQUFZLEVBQUM7Z0JBQ3BCLEtBQUssRUFBRSxxQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVE7Z0JBQzlDLE1BQU0sRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FDcEIsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDOUIsZ0JBQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsRUFDcEIsZ0JBQU0sQ0FBQyxLQUFLLEVBQUUsRUFDZCxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUNoQjtnQkFDRCxVQUFVLEVBQUUsQ0FBQyxJQUFJLG9CQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFVyxjQUFLLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELGFBQUksR0FBRyxDQUFDLEdBQUcsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsYUFBSSxHQUFHLENBQUMsR0FBRyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxhQUFJLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELGdCQUFPLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELGNBQUssR0FBRyxDQUFDLEdBQUcsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsY0FBSyxHQUFHLENBQUMsR0FBRyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRSxDQUFDLEVBNUJnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUE0QnRCO0FBRUQsSUFBaUIsYUFBYSxDQVM3QjtBQVRELFdBQWlCLGFBQWE7SUFDZiw4QkFBZ0IsR0FDM0Isa0NBQW9CLENBQUMsMEJBQTBCLENBQUM7SUFDckMsNEJBQWMsR0FBRyxrQ0FBb0IsQ0FBQyx3QkFBd0IsQ0FBQztJQUUvRCxrQ0FBb0IsR0FDL0Isc0NBQXdCLENBQUMsMEJBQTBCLENBQUM7SUFDekMsZ0NBQWtCLEdBQzdCLHNDQUF3QixDQUFDLHdCQUF3QixDQUFDO0FBQ3RELENBQUMsRUFUZ0IsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFTN0IifQ==