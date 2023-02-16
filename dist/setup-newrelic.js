"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initNewRelicCheck = exports.initNewRelic = void 0;
const config_1 = require("./config");
const initNewRelic = () => {
    if (config_1.loggerConfig.getLoggerConfig().initNewRelic) {
        /* tslint:disable-next-line */
        require("newrelic");
    }
};
exports.initNewRelic = initNewRelic;
const initNewRelicCheck = () => {
    return (process.env.NODE_ENV !== "local" &&
        process.env.DEPLOY_ENV &&
        (process.env.NEW_RELIC_LICENSE_KEY || process.env.NEW_RELIC_LICENSE_KEY_2));
};
exports.initNewRelicCheck = initNewRelicCheck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtbmV3cmVsaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2V0dXAtbmV3cmVsaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBRWpDLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUMvQixJQUFJLHFCQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQy9DLDhCQUE4QjtRQUM5QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDLENBQUM7QUFMVyxRQUFBLFlBQVksZ0JBS3ZCO0FBRUssTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7SUFDcEMsT0FBTyxDQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLE9BQU87UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO1FBQ3RCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQzNFLENBQUM7QUFDSixDQUFDLENBQUM7QUFOVyxRQUFBLGlCQUFpQixxQkFNNUIifQ==