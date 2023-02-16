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
    logger_1.KoaSuccessLogger = middlewares_1.KoaLoggerMiddlewares.SuccessLoggerMiddleware;
    logger_1.KoaErrorLogger = middlewares_1.KoaLoggerMiddlewares.ErrorLoggerMiddleware;
    logger_1.ExpressSuccessLogger = middlewares_1.ExpressLoggerMiddlewares.SuccessLoggerMiddleware;
    logger_1.ExpressErrorLogger = middlewares_1.ExpressLoggerMiddlewares.ErrorLoggerMiddleware;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBbUU7QUFDbkUsK0NBQStFO0FBQy9FLHFDQUF3QztBQUV4QyxJQUFpQixNQUFNLENBK0N0QjtBQS9DRCxXQUFpQixRQUFNO0lBQ3JCLElBQUksTUFBYyxDQUFDO0lBRW5CLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxHQUFHLElBQUEsc0JBQVksRUFBQztnQkFDcEIsS0FBSyxFQUFFLHFCQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUTtnQkFDOUMsTUFBTSxFQUFFLGdCQUFNLENBQUMsT0FBTyxDQUNwQixnQkFBTSxDQUFDLFFBQVEsRUFBRSxFQUNqQixnQkFBTSxDQUFDLFdBQVcsRUFBRSxFQUNwQixnQkFBTSxDQUFDLEtBQUssRUFBRSxFQUNkLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQ2hCO2dCQUNELFVBQVUsRUFBRSxDQUFDLElBQUksb0JBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN2QyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVXLHlCQUFnQixHQUFHLGtDQUFvQixDQUFDLHVCQUF1QixDQUFDO0lBQ2hFLHVCQUFjLEdBQUcsa0NBQW9CLENBQUMscUJBQXFCLENBQUM7SUFFNUQsNkJBQW9CLEdBQy9CLHNDQUF3QixDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLDJCQUFrQixHQUM3QixzQ0FBd0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUVwQyxjQUFLLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxhQUFJLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxhQUFJLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxhQUFJLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxnQkFBTyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsY0FBSyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsY0FBSyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0Msb0JBQVcsR0FBRztRQUN6QixLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDM0IsU0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEIsQ0FBQztLQUNGLENBQUM7SUFFVyxzQkFBYSxHQUFHO1FBQzNCLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUMzQixTQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsRUEvQ2dCLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQStDdEIifQ==