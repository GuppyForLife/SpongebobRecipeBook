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
  loginUser
} = require("./controllers");

router.get("*/recipes", getAllRecipes);
router.get("/recipes/search", searchByKeyword);
router.get("/recipes/:id", getRecipeById);
router.delete("/recipes/delete/:id", deleteRecipeById);
router.post("/recipes/create", createRecipe);
router.post("/users/register", registerNewUser);
router.post("/users/login", loginUser);
router.put("/recipes/update/:id", updateRecipe);

module.exports = router;
