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
          type: Schema.Types.ObjectId,
          required: true,
          ref: "ingredients"
        },
        quantity: { type: String, required: false },
      },
    ],
    preparations: { type: Array, required: false },
    categories: { type: Array, required: false },
    country: { type: String, required: false },
    comments: [{ type: Schema.Types.ObjectId, required: false, ref: "comments" }],
    chef: { type: Schema.Types.ObjectId, required: true, ref: "users" },
    image: { type: Array, default:"https://images.ctfassets.net/kugm9fp9ib18/3aHPaEUU9HKYSVj1CTng58/d6750b97344c1dc31bdd09312d74ea5b/menu-default-image_220606_web.png",required: false },
    likes: { type: Number, default: 0, required: false },
  },
  {
    collection: "recipes",
    timestamps: true
  }
);

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;
