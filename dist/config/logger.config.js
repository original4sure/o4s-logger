"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerConfig = void 0;
const interfaces_1 = require("../interfaces");
const dotenv = require("dotenv");
const path_1 = require("path");
const setup_newrelic_1 = require("../setup-newrelic");
var loggerConfig;
(function (loggerConfig) {
    /**
     * Get the default config
     * @returns
     */
    const getDefaultConfig = () => {
        const defaultConfig = {
            initNewRelic: false,
            logLevel: interfaces_1.LOG_LEVEL.info,
        };
        return defaultConfig;
    };
    const config = getDefaultConfig();
    /**
     * load the logger configuration
     */
    loggerConfig.loadLoggerConfiguration = () => {
        /** load environment variables */
        const loggerRootDir = (0, path_1.dirname)((0, path_1.dirname)(__dirname));
        const applicationRootDir = (0, path_1.dirname)((0, path_1.dirname)((0, path_1.dirname)(loggerRootDir)));
        const envFilePath = (0, path_1.resolve)(`${applicationRootDir}/environment/.env`);
        dotenv.config({ path: envFilePath });
        if ((0, setup_newrelic_1.initNewRelicCheck)()) {
            /** from this path newrelic.js will be searched */
            process.env.NEW_RELIC_HOME = loggerRootDir;
            config.initNewRelic = true;
        }
        config.logLevel = process.env.LOG_LEVEL || interfaces_1.LOG_LEVEL.info;
    };
    /**
     * Get the logger configuration
     */
    loggerConfig.getLoggerConfig = () => {
        return config;
    };
})(loggerConfig = exports.loggerConfig || (exports.loggerConfig = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvbG9nZ2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBZ0U7QUFDaEUsaUNBQWlDO0FBQ2pDLCtCQUF3QztBQUN4QyxzREFBc0Q7QUFFdEQsSUFBaUIsWUFBWSxDQXlDNUI7QUF6Q0QsV0FBaUIsWUFBWTtJQUMzQjs7O09BR0c7SUFDSCxNQUFNLGdCQUFnQixHQUFHLEdBQUcsRUFBRTtRQUM1QixNQUFNLGFBQWEsR0FBeUI7WUFDMUMsWUFBWSxFQUFFLEtBQUs7WUFDbkIsUUFBUSxFQUFFLHNCQUFTLENBQUMsSUFBSTtTQUN6QixDQUFDO1FBQ0YsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxNQUFNLEdBQXlCLGdCQUFnQixFQUFFLENBQUM7SUFFeEQ7O09BRUc7SUFDVSxvQ0FBdUIsR0FBRyxHQUFHLEVBQUU7UUFDMUMsaUNBQWlDO1FBQ2pDLE1BQU0sYUFBYSxHQUFHLElBQUEsY0FBTyxFQUFDLElBQUEsY0FBTyxFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxrQkFBa0IsR0FBRyxJQUFBLGNBQU8sRUFBQyxJQUFBLGNBQU8sRUFBQyxJQUFBLGNBQU8sRUFBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEUsTUFBTSxXQUFXLEdBQUcsSUFBQSxjQUFPLEVBQUMsR0FBRyxrQkFBa0IsbUJBQW1CLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFckMsSUFBSSxJQUFBLGtDQUFpQixHQUFFLEVBQUU7WUFDdkIsa0RBQWtEO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztZQUMzQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUVELE1BQU0sQ0FBQyxRQUFRLEdBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUF1QixJQUFJLHNCQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNFLENBQUMsQ0FBQztJQUVGOztPQUVHO0lBQ1UsNEJBQWUsR0FBRyxHQUFHLEVBQUU7UUFDbEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxFQXpDZ0IsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUF5QzVCIn0=