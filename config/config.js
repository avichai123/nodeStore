const dotenv = require('dotenv');
dotenv.config();
module.exports= {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER_DEV,
    "password": process.env.DB_PASS_DEV,
    "database": process.env.DB_NAME_DEV,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER_PROD,
    "password": process.env.DB_PASS_PROD,
    "database": process.env.DB_NAME_PROD,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
