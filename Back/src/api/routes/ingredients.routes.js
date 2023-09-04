const express = require('express');
const {getIngredients, postIngredient, updateIngredient, deleteIngredient, getIngredientById} = require('../controllers/ingredients.controller');
const { isAdmin } = require('../../middlewares/auth');


const ingredientRouter = express.Router();

ingredientRouter.get("/", getIngredients);
ingredientRouter.get("/:id", getIngredientById);
ingredientRouter.post("/", postIngredient);
ingredientRouter.put("/:id", isAdmin, updateIngredient);
ingredientRouter.delete("/:id", isAdmin, deleteIngredient);

module.exports = ingredientRouter;