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
                format: winston_1.format.combine(winston_1.format.errors({ stack: true }), winston_1.format.colorize(), winston_1.format.prettyPrint(), winston_1.format.splat(), winston_1.format.simple(), winston_1.format.timestamp()),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FLaUI7QUFDakIsK0NBQStFO0FBQy9FLHFDQUF3QztBQUV4QyxJQUFpQixNQUFNLENBNkJ0QjtBQTdCRCxXQUFpQixRQUFNO0lBQ3JCLElBQUksTUFBcUIsQ0FBQztJQUUxQixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sR0FBRyxJQUFBLHNCQUFZLEVBQUM7Z0JBQ3BCLEtBQUssRUFBRSxxQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVE7Z0JBQzlDLE1BQU0sRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FDcEIsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDOUIsZ0JBQU0sQ0FBQyxRQUFRLEVBQUUsRUFDakIsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsRUFDcEIsZ0JBQU0sQ0FBQyxLQUFLLEVBQUUsRUFDZCxnQkFBTSxDQUFDLE1BQU0sRUFBRSxFQUNmLGdCQUFNLENBQUMsU0FBUyxFQUFFLENBQ25CO2dCQUNELFVBQVUsRUFBRSxDQUFDLElBQUksb0JBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN2QyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVXLGNBQUssR0FBRyxDQUFDLEdBQUcsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsYUFBSSxHQUFHLENBQUMsR0FBRyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxhQUFJLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELGFBQUksR0FBRyxDQUFDLEdBQUcsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsZ0JBQU8sR0FBRyxDQUFDLEdBQUcsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsY0FBSyxHQUFHLENBQUMsR0FBRyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxjQUFLLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pFLENBQUMsRUE3QmdCLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQTZCdEI7QUFFRCxJQUFpQixhQUFhLENBUzdCO0FBVEQsV0FBaUIsYUFBYTtJQUNmLDhCQUFnQixHQUMzQixrQ0FBb0IsQ0FBQywwQkFBMEIsQ0FBQztJQUNyQyw0QkFBYyxHQUFHLGtDQUFvQixDQUFDLHdCQUF3QixDQUFDO0lBRS9ELGtDQUFvQixHQUMvQixzQ0FBd0IsQ0FBQywwQkFBMEIsQ0FBQztJQUN6QyxnQ0FBa0IsR0FDN0Isc0NBQXdCLENBQUMsd0JBQXdCLENBQUM7QUFDdEQsQ0FBQyxFQVRnQixhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQVM3QiJ9