export enum LOG_LEVEL {
  error = "error",
  warn = "warn",
  info = "info",
  http = "http",
  verbose = "verbose",
  debug = "debug",
  silly = "silly",
}

export interface ILoggerConfiguration {
  initNewRelic: boolean;
  logLevel: LOG_LEVEL;
}
