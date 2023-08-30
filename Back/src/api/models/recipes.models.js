const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//bloque de  modelos por cada modelo de datos
const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [
      {
        ingredient: {
          type: Schema.ObjectId,
          required: false,
          ref: "ingredients",
        },
        quantity: { type: String, required: false },
      },
    ],
    preparations: { type: Array, required: false },
    categories: { type: Array, required: false },
    country: { type: String, required: false },
    comments: [{ type: Schema.ObjectId, required: false, ref: "comments" }],
    chef: [{ type: Schema.ObjectId, required: false, ref: "user" }],
    image: { type: Array, required: false },
    likes: { type: Number, required: false },
  },
  {
    collection: "recipes",
    timestamps: true
  }
);

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;
