import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './config/middlewares/error.js';
import morganMiddleware from './config/middlewares/morgan.js';
import logger from './common/utils/logger.js';
import envs from './config/envs.js';
import { privateRouter, publicRouter } from './routes/all.routes.js';

// Create the express app
const app = express();

// Middlewares

// To activate the proxy if is behind one
app.enable('trust proxy');
// Enable CORS, security headers, body parser, and logging
app.use(cors());
// To secure the API of XSS, clickjacking, etc.
app.use(helmet());
// To parse the body of the request
app.use(express.json());
// To parse the body of the request
app.use(express.urlencoded({ extended: false }));
// To log the HTTP requests
app.use(morganMiddleware);

// Specify the routes
app.use('/api/v1/public', publicRouter);

//TODO : Add auth middleware
app.use('/api/v1/private' /* , auth */, privateRouter);

// to handle the errors
app.use(errorHandler);

// Load the environment variables
const { API_PORT, API_PORT_SSL, SSL } = envs;

// Starting the HTTP server
app.listen(API_PORT, () => {
  logger.info(`Server HTTP is running on port ${API_PORT}`);
});

// If SSL is enabled on .env variables, create an HTTPS server
if (SSL) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Load the SSL certificates if you have
  const sslOptions = {
    key: fs.readFileSync(__dirname + '/cert/private.key'),
    cert: fs.readFileSync(__dirname + '/cert/certificate.crt'),
  };

  // Starting the HTTPS server
  https.createServer(sslOptions, app).listen(API_PORT_SSL, function () {
    logger.info(`Server HTTPS is running on port ${API_PORT_SSL}`);
  });
}
