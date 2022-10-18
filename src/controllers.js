require("dotenv").config();
const { sequelize } = require("../db/db");
const { Sequelize, Op } = require("sequelize");
const { Recipe } = require("../db/Recipe");
const { User } = require("../db/User");
const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require("jsonwebtoken");
const {
  RECIPES_NOT_KP,
  EDIT_COOKIES_RECIPE,
  KRABBY_PATTY,
} = require("../db/permissions");
const { createAccessLevel } = require("../db/createAccessLevel");

exports.getAllRecipes = async (req, res) => {
  try {
    const { canAccessSecret } = req.permissions;
    const recipes = await Recipe.findAll({
      where: {
        isSecret: {
          [Op.or]: canAccessSecret,
        },
      },
    });
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
  const { canAccessSecret } = req.permissions;
  try {
    const singleRecipe = await Recipe.findByPk(recipeId);
    if (!singleRecipe) {
      res.status(404).json({
        success: false,
        message: "No recipe found",
      });
    } else {
      if (singleRecipe.isSecret && !canAccessSecret.includes(1)) {
        return res.status(403).json({
          success: false,
          message: "Permission Denied",
        });
      }
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

exports.deleteRecipeById = async (req, res) => {
  const recipeId = req.params.id;
  const { isAdmin } = req.user;
  if (isAdmin) {
    try {
      const recipeToDelete = await Recipe.findByPk(recipeId);
      if (!recipeToDelete) {
        res.status(400).json({
          success: false,
          message: "Recipe not found",
        });
      } else {
        const deletedRecipe = await recipeToDelete.destroy();
        res.status(200).json({
          deletedRecipe,
          success: true,
          message: "Recipe successfully deleted",
        });
      }
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ success: false, message: `- Error ${error.message}` });
    }
  } else {
    res.status(403).json({ success: false, message: "Permission Denied" });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = req.body;
    const createdRecipe = await Recipe.create(newRecipe);
    res.status(200).json({
      createdRecipe,
      success: true,
      message: "Recipe successfully create",
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: `- Error ${error.message}` });
  }
};

exports.updateRecipe = async (req, res) => {
  const recipeId = req.params.id;
  const { canAccessProtected } = req.permissions;
  const { canAccessSecret } = req.permissions;
  try {
    const recipeToUpdate = await Recipe.findByPk(recipeId);
    if (!recipeToUpdate) {
      res.status(400).json({
        success: false,
        message: "Recipe not found",
      });
    }
    if (recipeToUpdate.isSecret && !canAccessSecret.includes(1)) {
      return res.status(403).json({
        success: false,
        message: "Permission Denied",
      });
    }
    if (recipeToUpdate.isProtected && !canAccessProtected.includes(1)) {
      return res.status(403).json({
        success: false,
        message: "Permission Denied",
      });
    } else {
      const updateRecipe = await recipeToUpdate.update(req.body);
      res.status(200).json({
        updateRecipe,
        success: true,
        message: "Recipe successfully updated",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: `- Error ${error.message}` });
  }
};

exports.searchByKeyword = async (req, res) => {
  try {
    const { canAccessSecret } = req.permissions;
    const allRecipes = await Recipe.findAll({
      where: {
        isSecret: {
          [Op.or]: canAccessSecret,
        },
      },
    });
    const keyword = req.query.keyword.toLowerCase();
    const recipesFound = allRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(keyword)
    );

    res.status(200).json({
      recipesFound,
      success: true,
      message:
        recipesFound.length > 0
          ? `Recipes with the keyword: ${keyword} in the title`
          : `No matching titles containing the keyword: ${keyword}`,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: `- Error ${error.message}` });
  }
};

exports.registerNewUser = async (req, res) => {
  const SALT_COUNT = 8;
  const { username, name, password, email } = req.body;
  try {
    const isExistingUser = await User.findOne({ where: { email } });
    if (isExistingUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    const newUser = await User.create({
      username,
      name,
      password: hashedPassword,
      email,
      isAdmin: false,
      accessLevel: createAccessLevel(),
    });
    res.status(200).send(`Successfully created user: ${username}`);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `User not created ~ error: ${error.message}`,
    });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userToLogin = await User.findOne({ where: { username } });
    if (userToLogin) {
      const passwordsMatch = await bcrypt.compare(
        password,
        userToLogin.password
      );
      const { email, isAdmin, id, name, accessLevel } = userToLogin;
      if (passwordsMatch) {
        const accessToken = jwt.sign(
          {
            id: id,
            username: username,
            name: name,
            email: email,
            isAdmin: isAdmin,
            accessLevel: accessLevel,
          },
          process.env.ACCESS_TOKEN_SECRET
        );
        res.status(200).json({
          success: true,
          message: `Successfully logged in ${username}`,
          accessToken: accessToken,
        });
      } else {
        res.status(401).send(`Incorrect username or password`);
      }
    } else {
      res.status(401).send(`Incorrect username or password`);
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `User not logged in ~ error: ${error.message}`,
    });
  }
};

exports.authenticateTokenMiddleware = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (token === null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    const { accessLevel } = user;
    const canAccessSecret = [0];
    const canAccessProtected = [0];
    if ((accessLevel & KRABBY_PATTY) != 0) {
      canAccessSecret.push(1);
    }
    if ((accessLevel & EDIT_COOKIES_RECIPE) != 0) {
      canAccessProtected.push(1);
    }
    req.permissions = {
      canAccessSecret,
      canAccessProtected,
    };
    next();
  });
  // if ((accessLevel & EDIT_COOKIES_RECIPE) != 0) {
  //   isProtected.push(1);
  // }
};
