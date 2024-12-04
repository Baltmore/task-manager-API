/* eslint-disable no-unused-vars */
import logger from '../../common/utils/logger.js';

// Middleware of error handling
export const errorHandler = (err, req, res, next) => {
  res.status(500);

  // Register the error in the console
  logger.error(err);

  // Send the JSON response
  return res.json({
    error: true,
    name: err.name,
    code: err.code,
    message: err.message,
  });
};
