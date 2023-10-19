const express = require('express');
const {getRecipes, postRecipe, updateRecipe, deleteRecipe, getRecipeById} = require("../controllers/recipes.controller");
const { isAdmin, isAuth } = require('../../middlewares/auth');

const recipeRouter = express.Router();

recipeRouter.get("/", getRecipes);
recipeRouter.get("/:id", getRecipeById);
recipeRouter.post("/", postRecipe);
recipeRouter.put("/:id", updateRecipe);
recipeRouter.delete("/:id", deleteRecipe)

module.exports = recipeRouter;