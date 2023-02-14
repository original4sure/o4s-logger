"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path_1 = require("path");
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
};
initNewRelic();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtbmV3cmVsaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2V0dXAtbmV3cmVsaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBaUM7QUFDakMsK0JBQXdDO0FBRXhDLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUN4QixNQUFNLGFBQWEsR0FBRyxJQUFBLGNBQU8sRUFBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxNQUFNLGtCQUFrQixHQUFHLElBQUEsY0FBTyxFQUFDLElBQUEsY0FBTyxFQUFDLElBQUEsY0FBTyxFQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwRSxNQUFNLFdBQVcsR0FBRyxJQUFBLGNBQU8sRUFBQyxHQUFHLGtCQUFrQixtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUVyQyxJQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLE9BQU87UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQ2pDO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQzNDLDhCQUE4QjtRQUM5QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDLENBQUM7QUFFRixZQUFZLEVBQUUsQ0FBQyJ9