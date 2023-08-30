const Recipe = require("../models/recipes.models")

const getRecipes = async(req,res)=>{
    try {
      const allRecipes = await Recipe.find().populate("comments");
      return res.status(200).json(allRecipes)
    } catch (error) {
      return res.status(500).json(error)
    }
  };

  const getRecipeById = async (req, res) => {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findById(id).populate("comments")
      if (!recipe) {
        return res.status(404).json({ message: "recipe not found :(" });
      }
      return res.status(200).json(recipe);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const postRecipe = async (req, res) => {
    try {
      const newRecipe = req.body;
      const createdRecipe = new Recipe(newRecipe);
      const created = await createdRecipe.save()
      return res.status(200).json(created);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  const updateRecipe = async (req, res) => {
    try {
      const {id} = req.params;
      const updateRecipe = new Recipe(req.body);
      updateRecipe.id = id;
      const updatedInfo = await Recipe.findByIdAndUpdate(id, updateRecipe, {new: true})
      if (!updatedInfo){
        return res.status(404).json({message: "No encontrado :("});
      }
      return res.status(200).json(updatedInfo);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  const deleteRecipe = async (req, res) =>{
    try {
      const {id} = req.params;
      const deleteRecipe = await Recipe.findByIdAndDelete(id)
      if(!deleteRecipe){
        return res.status(418).json({message: "¿Que haces?"})
      }
      return res.status(200).json(deleteRecipe)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  module.exports = {getRecipes, getRecipeById, postRecipe, updateRecipe, deleteRecipe};