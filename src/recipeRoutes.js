const express = require("express");
const recipeRouter = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  deleteRecipeById,
  createRecipe,
  updateRecipe,
  searchByKeyword,
  authenticateTokenMiddleware
} = require("./controllers");

recipeRouter.get("*/recipes", authenticateTokenMiddleware ,getAllRecipes);
recipeRouter.get("/recipes/search", authenticateTokenMiddleware, searchByKeyword);
recipeRouter.get("/recipes/:id", authenticateTokenMiddleware, getRecipeById);
recipeRouter.delete("/recipes/delete/:id",authenticateTokenMiddleware, deleteRecipeById);
recipeRouter.post("/recipes/create", authenticateTokenMiddleware, createRecipe);
recipeRouter.put("/recipes/update/:id", authenticateTokenMiddleware, updateRecipe);

module.exports = recipeRouter;