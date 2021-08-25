// Include the dotenv module to support .env file with connection information
require('dotenv').config();

// Include Sequelize module
const Sequelize = require('sequelize');

// Start a connection to the database using the authentication information in the .env file
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
