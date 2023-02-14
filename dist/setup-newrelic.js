"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path_1 = require("path");
const logger_1 = require("./logger");
const initNewRelic = () => {
    const loggerRootDir = (0, path_1.dirname)(__dirname);
    const applicationRootDir = (0, path_1.dirname)((0, path_1.dirname)((0, path_1.dirname)(loggerRootDir)));
    const envFilePath = (0, path_1.resolve)(`${applicationRootDir}/environment/.env`);
    dotenv.config({ path: envFilePath });
    if (process.env.NODE_ENV !== "local" &&
        process.env.DEPLOY_ENV &&
        process.env.NEW_RELIC_LICENSE_KEY) {
        process.env.NEW_RELIC_HOME = loggerRootDir;
        /* tslint:disable-next-line */
        require("newrelic");
    }
    else {
        logger_1.logger.info("newrelic not started!!! mandatory keys not present: NODE_ENV | DEPLOY_ENV | NEW_RELIC_LICENSE_KEY");
    }
};
initNewRelic();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtbmV3cmVsaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2V0dXAtbmV3cmVsaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBaUM7QUFDakMsK0JBQXdDO0FBQ3hDLHFDQUFrQztBQUVsQyxNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7SUFDeEIsTUFBTSxhQUFhLEdBQUcsSUFBQSxjQUFPLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsTUFBTSxrQkFBa0IsR0FBRyxJQUFBLGNBQU8sRUFBQyxJQUFBLGNBQU8sRUFBQyxJQUFBLGNBQU8sRUFBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEUsTUFBTSxXQUFXLEdBQUcsSUFBQSxjQUFPLEVBQUMsR0FBRyxrQkFBa0IsbUJBQW1CLENBQUMsQ0FBQztJQUN0RSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFFckMsSUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxPQUFPO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUNqQztRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUMzQyw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3JCO1NBQU07UUFDTCxlQUFNLENBQUMsSUFBSSxDQUNULG1HQUFtRyxDQUNwRyxDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUM7QUFFRixZQUFZLEVBQUUsQ0FBQyJ9