const express = require('express');
const { sequelize } = require('../db/db');

const router = express.Router();

const { getAllRecipes, getRecipeById } = require('./controllers');

router.get('*/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipeById);

module.exports = router;