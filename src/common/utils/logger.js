import winston from 'winston';
import envs from '../../config/envs.js';

// Define the levels of the logs
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

// extract the level from the environment variables
const level = envs.IS_DEVELOPMENT ? 'debug' : 'http';

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'blue',
  http: 'magenta',
  verbose: 'white',
  debug: 'cyan',
};

winston.addColors(colors);

// Define the format of the logs depends of the environment
const formatConsole = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  ),
  winston.format.colorize({ all: true })
);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

// Define the transports of the logs
const transports = [
  new winston.transports.Console({ format: formatConsole }),
  new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  new winston.transports.File({ filename: 'logs/all.log' }),
];

// Create the logger
const logger = winston.createLogger({
  level,
  levels,
  format,
  transports,
});

export default logger;
