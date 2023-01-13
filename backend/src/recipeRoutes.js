const express = require("express");
const recipeRouter = express.Router();
const {
  getAllRecipes,
  getRecipeByTitle,
  deleteRecipeByTitle,
  createRecipe,
  searchByKeyword,
  authenticateTokenMiddleware,
  updateRecipeByTitle
} = require("./controllers");

recipeRouter.get("*/recipes", authenticateTokenMiddleware ,getAllRecipes);
recipeRouter.get("/recipes/search", authenticateTokenMiddleware, searchByKeyword);
recipeRouter.get("/recipes/:slug", authenticateTokenMiddleware, getRecipeByTitle);
recipeRouter.delete("/recipes/delete/:slug",authenticateTokenMiddleware, deleteRecipeByTitle);
recipeRouter.post("/recipes/create", authenticateTokenMiddleware, createRecipe);
recipeRouter.put("/recipes/update/:slug", authenticateTokenMiddleware, updateRecipeByTitle);

module.exports = recipeRouter;