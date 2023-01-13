const path = require('path');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('spongebobRecipeBook', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    sequelize,
    Sequelize
}