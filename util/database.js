const Sequelize = require("sequelize");

const sequelize = new Sequelize("hoidanit", "root", "123456", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

module.exports = sequelize;
