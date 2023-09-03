const Ingredient = require("../models/ingredients.models");

const getIngredients = async (req, res) => {
  try {
    const { id } = req.params;
    const allIngredients = await Ingredient.find(id);
    return res.status(200).json(allIngredients);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getIngredientById = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await Ingredient.findById(id)
  } catch (error) {
    return res.status(500).json(error);
  }
}

const postIngredient = async (req, res) => {
  try {
    const newIngredient = req.body;
    const createdIngredient = new Ingredient(newIngredient);
    const created = await createdIngredient.save();
    return res.status(200).json(created);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const updateIngredient = new Ingredient(req.body);
    updateIngredient.id = id;
    const updatedInfo = await Ingredient.findByIdAndUpdate(
      id,
      updateIngredient,
      { new: true }
    );
    if (!updatedInfo) {
      return res.status(404).json({ message: "No encontrado :(" });
    }
    return res.status(200).json(updatedInfo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteIngredient = await Ingredient.findByIdAndDelete(id);
    if (!deleteIngredient) {
      return res.status(418).json({ message: "Can't delete" });
    }
    return res.status(200).json(deleteIngredient);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getIngredients,
  getIngredientById,
  postIngredient,
  updateIngredient,
  deleteIngredient,
};
