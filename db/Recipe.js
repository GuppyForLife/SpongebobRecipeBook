const { Sequelize, sequelize } = require("./db");

const Recipe = sequelize.define('recipe', {
  title: Sequelize.STRING,
  ingredients: Sequelize.TEXT,
  directions: Sequelize.TEXT,
  isSecret: Sequelize.BOOLEAN,
  isProtected: Sequelize.BOOLEAN
});

module.exports = { Recipe };
