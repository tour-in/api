require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": "root",
    "password": "my_secret_password",
    "database": "db_tourin",
    "host": "127.0.0.1",
    "port": "6033",
    "dialect": "mysql",
    "logging": false 
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
};