import * as dotenv from 'dotenv';

dotenv.config();

const getEnvKey = (key: string): string => {
  if (process.env[key] === undefined) {
    throw new Error(`Property "${key}" is missing in environment.`);
  }

  return process.env[key] as string;
};


export const NODE_ENV = getEnvKey('NODE_ENV');

// App
export const APP_PORT = Number(getEnvKey('APP_PORT'));

// Postgres
export const DB_HOST = getEnvKey('DB_HOST');
export const DB_PORT = Number(getEnvKey('DB_PORT'));
export const DB_USERNAME = getEnvKey('DB_USERNAME');
export const DB_PASSWORD = getEnvKey('DB_PASSWORD');
export const DB_NAME = getEnvKey('DB_NAME');