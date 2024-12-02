import logger from '../common/utils/logger';
import envs from '../config/envs';
import { PrismaClient } from '@prisma/client/extension';

// Load the environment variable of the application
const { NODE_ENV } = envs;

logger.info(`enviroment: ${NODE_ENV}`);

// Create the database connection using Prisma
export const database = new PrismaClient({
  log: NODE_ENV === 'prod' ? ['error'] : ['query', 'warn', 'error'],
});
