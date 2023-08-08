const { Sequelize, DataTypes, Model } = require("sequelize");
const path = require("path");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "./db.sqlite"),
  logging: false, // remove this line if you don't want to see the SQL queries in
});

module.exports = {
  db,
  DataTypes,
  Model,
};
