const express = require('express');
const { sequelize } = require('../db/db');

const router = express.Router();

const { getAllRecipes, getRecipeById, deleteRecipeById, createRecipe } = require('./controllers');

router.get('*/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipeById);
router.delete('/recipes/delete/:id', deleteRecipeById);
router.post('/recipes/create', createRecipe);

module.exports = router;