const express = require('express');
const {getRecipes, postRecipe, updateRecipe, deleteRecipe, getRecipeById} = require("../controllers/recipes.controller");
const { isAdmin } = require('../../middlewares/auth');

const recipeRouter = express.Router();

recipeRouter.get("/", getRecipes);
recipeRouter.get("/:id", getRecipeById);
recipeRouter.post("/", isAdmin, postRecipe);
recipeRouter.put("/:id", isAdmin, updateRecipe);
recipeRouter.delete("/:id", isAdmin, deleteRecipe)

module.exports = recipeRouter;