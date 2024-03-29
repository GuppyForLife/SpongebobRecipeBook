const { Sequelize, sequelize } = require("./db");

const User = sequelize.define("user", {
  username: Sequelize.STRING,
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  accessLevel: Sequelize.INTEGER,
  isAdmin: Sequelize.BOOLEAN
});
module.exports = { User };
