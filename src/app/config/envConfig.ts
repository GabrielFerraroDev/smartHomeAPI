import * as dotenv from 'dotenv';

const nodeEnv = process.env.NODE_ENV || 'development';

dotenv.config({
  path: `.env.${nodeEnv}`,
});

export const envConfig = {
  mongoUri: process.env.MONGO_URI || '',
};
