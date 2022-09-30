const express = require('express');
const { sequelize } = require('../db/db');

const router = express.Router();

const { getAllRecipes } = require('./controllers');

router.get('*/recipes', getAllRecipes);

module.exports = router;