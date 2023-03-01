import { ILoggerConfiguration } from "../interfaces";
export declare namespace loggerConfig {
    /**
     * load the logger configuration
     */
    const loadLoggerConfiguration: () => void;
    /**
     * Get the logger configuration
     */
    const getLoggerConfig: () => ILoggerConfiguration;
    const setEnvironment: () => void;
}
