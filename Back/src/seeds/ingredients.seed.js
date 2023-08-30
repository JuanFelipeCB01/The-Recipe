const { default: mongoose } = require("mongoose");
const Ingredient = require("../api/models/ingredients.models");
const dotenv = require('dotenv').config();

const arrayIngredients = [
    {
        "name": "Avena",
        "description": "La avena es un grano saludable y versátil, rico en fibra y nutrientes esenciales.",
        "energeticValue": "389 kcal",
        "totalFat": "6.9 g",
        "saturatedFat": "1.2 g",
        "carbs": "67.7 g",
        "sugars": "0.99 g",
        "sodium": "0.01 g",
        "image": "imagen_avena.jpg"
      }
];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allIngredients = await Ingredient.find();
    if (allIngredients.length > 0) {
        await Ingredient.collection.drop();
        console.log("Ingredients deleted");
    }
})
.catch((error)=> console.log("error deleting ingredients",error))
.then(async ()=> {
    const ingredientMap = arrayIngredients.map((ingredient) => new Ingredient(ingredient));
    await Ingredient.insertMany(ingredientMap);
    console.log("ingredients insert correctly");
})
.catch((error) => console.log("error inserting ingredients", error))
.finally(()=> mongoose.disconnect())