import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  database: {
    type: process.env.DB_TYPE || 'sqlite',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'database',
  },
  otherService: {
    apiKey: process.env.OTHER_SERVICE_API_KEY || 'defaultApiKey',
    apiUrl: process.env.OTHER_SERVICE_API_URL || 'https://api.example.com',
  },
}));
