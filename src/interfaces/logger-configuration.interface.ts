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
  logLevel: LOG_LEVEL;
}
