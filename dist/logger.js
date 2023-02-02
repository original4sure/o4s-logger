"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLoggers = void 0;
const winston_1 = require("winston");
const middlewares_1 = require("./middlewares");
const path_1 = require("path");
var AppLoggers;
(function (AppLoggers) {
    let logger;
    AppLoggers.initNewRelic = () => {
        if (process.env.NODE_ENV !== "local" && process.env.NEW_RELIC_LICENSE_KEY) {
            process.env.NEW_RELIC_HOME = (0, path_1.dirname)(__dirname);
            /* tslint:disable-next-line */
            require("newrelic");
        }
    };
    const getLogger = () => {
        if (!logger) {
            logger = (0, winston_1.createLogger)({
                format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.prettyPrint(), winston_1.format.splat(), winston_1.format.simple()),
                transports: [new winston_1.transports.Console()],
            });
        }
        return logger;
    };
    AppLoggers.KoaSuccessLogger = middlewares_1.KoaLoggerMiddlewares.SuccessLoggerMiddleware;
    AppLoggers.KoaErrorLogger = middlewares_1.KoaLoggerMiddlewares.ErrorLoggerMiddleware;
    AppLoggers.ExpressSuccessLogger = middlewares_1.ExpressLoggerMiddlewares.SuccessLoggerMiddleware;
    AppLoggers.ExpressErrorLogger = middlewares_1.ExpressLoggerMiddlewares.ErrorLoggerMiddleware;
    AppLoggers.info = (data) => getLogger().info(data);
    AppLoggers.error = (err) => getLogger().error(err);
})(AppLoggers = exports.AppLoggers || (exports.AppLoggers = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBbUU7QUFDbkUsK0NBQStFO0FBQy9FLCtCQUErQjtBQUUvQixJQUFpQixVQUFVLENBcUMxQjtBQXJDRCxXQUFpQixVQUFVO0lBQ3pCLElBQUksTUFBYyxDQUFDO0lBRU4sdUJBQVksR0FBRyxHQUFHLEVBQUU7UUFDL0IsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTtZQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFBLGNBQU8sRUFBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBQSxzQkFBWSxFQUFDO2dCQUNwQixNQUFNLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLENBQ3BCLGdCQUFNLENBQUMsUUFBUSxFQUFFLEVBQ2pCLGdCQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCLGdCQUFNLENBQUMsS0FBSyxFQUFFLEVBQ2QsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FDaEI7Z0JBQ0QsVUFBVSxFQUFFLENBQUMsSUFBSSxvQkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBRVcsMkJBQWdCLEdBQUcsa0NBQW9CLENBQUMsdUJBQXVCLENBQUM7SUFDaEUseUJBQWMsR0FBRyxrQ0FBb0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUU1RCwrQkFBb0IsR0FDL0Isc0NBQXdCLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsNkJBQWtCLEdBQzdCLHNDQUF3QixDQUFDLHFCQUFxQixDQUFDO0lBRXBDLGVBQUksR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLGdCQUFLLEdBQUcsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1RCxDQUFDLEVBckNnQixVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQXFDMUIifQ==