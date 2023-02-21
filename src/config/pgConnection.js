const { Sequelize, Model, DataTypes, QueryTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.db_host,
  port: 5432,
  database: process.env.db_name,
  username: process.env.db_user,
  password: process.env.db_password,
  logging: false
});

module.exports = {
  sequelize, Model, DataTypes, QueryTypes
}
