const { sequelize } = require("../db/db");
const { Recipe } = require("../db/Recipe");

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();

    if (!recipes) {
      res.status(400).json({
        success: false,
        message: "No products found",
      });
    } else {
      res.status(200).json({
        recipes,
        success: true,
        message: "All recipes returned",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: `- Error ${error.message}` });
  }
};

exports.getRecipeById = async (req, res) => {
  const recipeId = req.params.id;
  try {
    const singleRecipe = await Recipe.findByPk(recipeId);
    if (!singleRecipe) {
      res.status(400).json({
        success: false,
        message: "No recipe found",
      });
    } else {
      res.status(200).json({
        singleRecipe,
        success: true,
        message: "Recipe returned",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: `- Error ${error.message}` });
  }
};
