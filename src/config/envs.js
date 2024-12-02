import dotenv from 'dotenv';

dotenv.config();

// extract the environment variables from .env with the help of dotenv
export default {
  NODE_ENV: String(process.env.NODE_ENV).trim(),
  IS_DEVELOPMENT: String(process.env.NODE_ENV).trim() === 'dev',
  API_PORT: process.env.API_PORT || 3000,
  API_PORT_SSL: process.env.API_PORT_SSL,
  SSL: String(process.env.SSL).trim() === 'true',
  DATABASE_URL: process.env.DATABASE_URL,
  DATA_SECRET: process.env.DATA_SECRET,
};
