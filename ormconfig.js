const fs = require('fs');
const { config } = require('dotenv');

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const fileName = `.env.${ENVIRONMENT}`;

if (fs.existsSync(fileName)) {
  config({ path: fileName });
}

module.exports = {
  "type": "mysql",
  "host": process.env.DB_HOST || "localhost",
  "port": process.env.DB_PORT || 3306,
  "username": process.env.DB_USER || "root",
  "password": process.env.DB_PASS || "123456",
  "database": process.env.DB_NAME || "4all",
  "entities": [
    process.env.DB_ENTITIES || "./src/modules/**/infra/typeorm/entities/*.ts"
  ],
  "migrations": [
    process.env.DB_MIGRATIONS || "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": process.env.DB_MIGRATIONS_DIR || "./src/shared/infra/typeorm/migrations"
  }
}
