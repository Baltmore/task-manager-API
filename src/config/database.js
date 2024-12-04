import logger from '../common/utils/logger.js';
import envs from '../config/envs.js';
import { PrismaClient } from '@prisma/client';

// Load the environment variable of the application
const { NODE_ENV } = envs;

logger.info(`enviroment: ${NODE_ENV}`);

// Create the database connection using Prisma
export const database = new PrismaClient({
  log: NODE_ENV === 'prod' ? ['error'] : ['query', 'warn', 'error'],
});
