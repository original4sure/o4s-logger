"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initNewRelicCheck = exports.initNewRelic = void 0;
const path_1 = require("path");
const initNewRelic = () => {
    if ((0, exports.initNewRelicCheck)()) {
        const newrelicConfigDirPath = (0, path_1.dirname)(__dirname);
        /** from this path newrelic.js will be searched */
        process.env.NEW_RELIC_HOME = newrelicConfigDirPath;
        /* tslint:disable-next-line */
        require("newrelic-koa");
    }
};
exports.initNewRelic = initNewRelic;
const initNewRelicCheck = () => {
    return (process.env.NODE_ENV !== "local" &&
        process.env.DEPLOY_ENV &&
        (process.env.NEW_RELIC_LICENSE_KEY || process.env.NEW_RELIC_LICENSE_KEY_2));
};
exports.initNewRelicCheck = initNewRelicCheck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtbmV3cmVsaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2V0dXAtbmV3cmVsaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQStCO0FBRXhCLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUMvQixJQUFJLElBQUEseUJBQWlCLEdBQUUsRUFBRTtRQUN2QixNQUFNLHFCQUFxQixHQUFHLElBQUEsY0FBTyxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpELGtEQUFrRDtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQztRQUVuRCw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3pCO0FBQ0gsQ0FBQyxDQUFDO0FBVlcsUUFBQSxZQUFZLGdCQVV2QjtBQUVLLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO0lBQ3BDLE9BQU8sQ0FDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxPQUFPO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtRQUN0QixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUMzRSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBTlcsUUFBQSxpQkFBaUIscUJBTTVCIn0=