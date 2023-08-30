const { default: mongoose } = require("mongoose");
const Recipe = require("../api/models/recipes.models");
const dotenv = require("dotenv").config();

const arrayRecipes = [
  {
    name: "Galletas de Avena",
    description: "Deliciosas galletas de avena ideales para un snack saludable.",
    ingredients: [
      { ingredient: "64ef4d0fc678843695146431", quantity: "1 taza"  },
  
    ],
    preparations: [
      "Precalienta el horno a 180°C.",
      "En un tazón, aplasta el plátano hasta obtener un puré.",
      "Agrega la avena, miel, esencia de vainilla y sal. Mezcla bien.",
      "Forma pequeñas bolitas con la masa y aplánalas para hacer las galletas.",
      "Coloca las galletas en una bandeja para hornear previamente engrasada o con papel de horno.",
      "Hornea durante 12-15 minutos o hasta que las galletas estén doradas en los bordes.",
      "Saca del horno y deja enfriar antes de disfrutar.",
    ],
    categories: ["Recetas Fáciles", "Recetas para Niños"],
    country: "Internacional",
    // comments: [
    //   {
    //     Usuario: "CocinaConAmor",
    //     Comentario: "¡Estas galletas son increíbles! A mis hijos les encantan.",
    //   },
    //   {
    //     Usuario: "Foodie123",
    //     Comentario:
    //       "Muy fácil de hacer y saben deliciosas. Definitivamente las recomiendo.",
    //   },
    // ],
    // chef: "ChefAlegre",
    image: "imagen_galletas.jpg",
    likes: 0,
  },
];

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
  .then(async () => {
    const allRecipes = await Recipe.find();
    if (allRecipes.length > 0) {
      await Recipe.collection.drop();
      console.log("Recipes deleted");
    }
  })
  .catch((error) => console.log("error deleting recipes", error))
  .then(async () => {
    const recipeMap = arrayRecipes.map((recipe) => new Recipe(recipe));
    await Recipe.insertMany(recipeMap);
    console.log("recipes insert correctly");
  })
  .catch((error) => console.log("error inserting recipes", error))
  .finally(() => mongoose.disconnect());
