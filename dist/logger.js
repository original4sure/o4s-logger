"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
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
    logger_1.KoaSuccessLogger = middlewares_1.KoaLoggerMiddlewares.getSuccessLoggerMiddleware;
    logger_1.KoaErrorLogger = middlewares_1.KoaLoggerMiddlewares.getErrorLoggerMiddleware;
    logger_1.ExpressSuccessLogger = middlewares_1.ExpressLoggerMiddlewares.getSuccessLoggerMiddleware;
    logger_1.ExpressErrorLogger = middlewares_1.ExpressLoggerMiddlewares.getErrorLoggerMiddleware;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBbUU7QUFDbkUsK0NBQStFO0FBQy9FLHFDQUF3QztBQUV4QyxJQUFpQixNQUFNLENBZ0R0QjtBQWhERCxXQUFpQixRQUFNO0lBQ3JCLElBQUksTUFBYyxDQUFDO0lBRW5CLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxHQUFHLElBQUEsc0JBQVksRUFBQztnQkFDcEIsS0FBSyxFQUFFLHFCQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUTtnQkFDOUMsTUFBTSxFQUFFLGdCQUFNLENBQUMsT0FBTyxDQUNwQixnQkFBTSxDQUFDLFFBQVEsRUFBRSxFQUNqQixnQkFBTSxDQUFDLFdBQVcsRUFBRSxFQUNwQixnQkFBTSxDQUFDLEtBQUssRUFBRSxFQUNkLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCO2dCQUNELFVBQVUsRUFBRSxDQUFDLElBQUksb0JBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN2QyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVXLHlCQUFnQixHQUMzQixrQ0FBb0IsQ0FBQywwQkFBMEIsQ0FBQztJQUNyQyx1QkFBYyxHQUFHLGtDQUFvQixDQUFDLHdCQUF3QixDQUFDO0lBRS9ELDZCQUFvQixHQUMvQixzQ0FBd0IsQ0FBQywwQkFBMEIsQ0FBQztJQUN6QywyQkFBa0IsR0FDN0Isc0NBQXdCLENBQUMsd0JBQXdCLENBQUM7SUFFdkMsY0FBSyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsYUFBSSxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsYUFBSSxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsYUFBSSxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsZ0JBQU8sR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELGNBQUssR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLGNBQUssR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9DLG9CQUFXLEdBQUc7UUFDekIsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQzNCLFNBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hCLENBQUM7S0FDRixDQUFDO0lBRVcsc0JBQWEsR0FBRztRQUMzQixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDM0IsU0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakIsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDLEVBaERnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFnRHRCIn0=