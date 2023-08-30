const express = require('express');
const {getRecipes, postRecipe, updateRecipe, deleteRecipe} = require("../controllers/recipes.controller")

const recipeRouter = express.Router();

recipeRouter.get("/", getRecipes);
recipeRouter.post("/", postRecipe);
recipeRouter.put("/:id", updateRecipe);
recipeRouter.delete("/:id", deleteRecipe)

module.exports = recipeRouter;