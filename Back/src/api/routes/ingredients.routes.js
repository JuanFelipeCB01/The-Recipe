const express = require('express');
const {getIngredients, postIngredient, updateIngredient, deleteIngredient} = require('../controllers/ingredients.controller');


const ingredientRouter = express.Router();

ingredientRouter.get("/", getIngredients);
ingredientRouter.post("/", postIngredient);
ingredientRouter.put("/:id", updateIngredient);
ingredientRouter.delete("/:id", deleteIngredient);

module.exports = ingredientRouter;