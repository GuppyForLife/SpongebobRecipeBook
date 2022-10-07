const express = require("express");
const { sequelize } = require("../db/db");

const router = express.Router();

const {
  getAllRecipes,
  getRecipeById,
  deleteRecipeById,
  createRecipe,
  updateRecipe,
  searchByKeyword,
  registerNewUser,
  loginUser,
  authenticateTokenMiddleware
} = require("./controllers");

router.get("*/recipes", authenticateTokenMiddleware ,getAllRecipes);
router.get("/recipes/search", authenticateTokenMiddleware, searchByKeyword);
router.get("/recipes/:id", authenticateTokenMiddleware, getRecipeById);
router.delete("/recipes/delete/:id",authenticateTokenMiddleware, deleteRecipeById);
router.post("/recipes/create", authenticateTokenMiddleware, createRecipe);
router.post("/users/register", registerNewUser);
router.post("/users/login", loginUser);
router.put("/recipes/update/:id", authenticateTokenMiddleware, updateRecipe);

module.exports = router;