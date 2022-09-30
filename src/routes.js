const express = require('express');
const { sequelize } = require('../db/db');

const router = express.Router();

const { getAllRecipes, getRecipeById, deleteRecipeById } = require('./controllers');

router.get('*/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipeById);
router.delete('/recipes/delete/:id', deleteRecipeById);

module.exports = router;