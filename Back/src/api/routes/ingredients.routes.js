const express = require('express');
const {getIngredients, postIngredient, updateIngredient, deleteIngredient} = require('../controllers/ingredients.controller');
const { isAdmin } = require('../../middlewares/auth');


const ingredientRouter = express.Router();

ingredientRouter.get("/", getIngredients);
ingredientRouter.post("/", isAdmin, postIngredient);
ingredientRouter.put("/:id", isAdmin, updateIngredient);
ingredientRouter.delete("/:id", isAdmin, deleteIngredient);

module.exports = ingredientRouter;