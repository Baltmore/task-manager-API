import morgan from 'morgan';
import logger from '../../common/utils/logger.js';

// Define the stream for the logger
const stream = {
  write: (message) => logger.http(message),
};

// Define the token for the remote user
const morganMiddleware = morgan(
  ':remote-addr :remote-user :method :url :status :res[content-length] - :response-time ms',
  { stream }
);

// Export the middleware
export default morganMiddleware;
