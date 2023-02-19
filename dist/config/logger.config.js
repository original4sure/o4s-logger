"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerConfig = void 0;
const interfaces_1 = require("../interfaces");
const dotenv = require("dotenv");
const path_1 = require("path");
var loggerConfig;
(function (loggerConfig) {
    /**
     * Get the default config
     * @returns
     */
    const getDefaultConfig = () => {
        const defaultConfig = {
            logLevel: interfaces_1.LOG_LEVEL.info,
        };
        return defaultConfig;
    };
    const config = getDefaultConfig();
    /**
     * load the logger configuration
     */
    loggerConfig.loadLoggerConfiguration = () => {
        config.logLevel = process.env.LOG_LEVEL || interfaces_1.LOG_LEVEL.info;
    };
    /**
     * Get the logger configuration
     */
    loggerConfig.getLoggerConfig = () => {
        return config;
    };
    loggerConfig.setEnvironment = () => {
        /** load environment variables */
        const loggerRootDir = (0, path_1.dirname)((0, path_1.dirname)(__dirname));
        const applicationRootDir = (0, path_1.dirname)((0, path_1.dirname)((0, path_1.dirname)(loggerRootDir)));
        const envFilePath = (0, path_1.resolve)(`${applicationRootDir}/environment/.env`);
        dotenv.config({ path: envFilePath });
    };
})(loggerConfig = exports.loggerConfig || (exports.loggerConfig = {}));
loggerConfig.setEnvironment();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvbG9nZ2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBZ0U7QUFDaEUsaUNBQWlDO0FBQ2pDLCtCQUF3QztBQUV4QyxJQUFpQixZQUFZLENBb0M1QjtBQXBDRCxXQUFpQixZQUFZO0lBQzNCOzs7T0FHRztJQUNILE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO1FBQzVCLE1BQU0sYUFBYSxHQUF5QjtZQUMxQyxRQUFRLEVBQUUsc0JBQVMsQ0FBQyxJQUFJO1NBQ3pCLENBQUM7UUFDRixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBeUIsZ0JBQWdCLEVBQUUsQ0FBQztJQUV4RDs7T0FFRztJQUNVLG9DQUF1QixHQUFHLEdBQUcsRUFBRTtRQUMxQyxNQUFNLENBQUMsUUFBUSxHQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBdUIsSUFBSSxzQkFBUyxDQUFDLElBQUksQ0FBQztJQUMzRSxDQUFDLENBQUM7SUFFRjs7T0FFRztJQUNVLDRCQUFlLEdBQUcsR0FBRyxFQUFFO1FBQ2xDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVXLDJCQUFjLEdBQUcsR0FBRyxFQUFFO1FBQ2pDLGlDQUFpQztRQUNqQyxNQUFNLGFBQWEsR0FBRyxJQUFBLGNBQU8sRUFBQyxJQUFBLGNBQU8sRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sa0JBQWtCLEdBQUcsSUFBQSxjQUFPLEVBQUMsSUFBQSxjQUFPLEVBQUMsSUFBQSxjQUFPLEVBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBFLE1BQU0sV0FBVyxHQUFHLElBQUEsY0FBTyxFQUFDLEdBQUcsa0JBQWtCLG1CQUFtQixDQUFDLENBQUM7UUFDdEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztBQUNKLENBQUMsRUFwQ2dCLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBb0M1QjtBQUVELFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQyJ9