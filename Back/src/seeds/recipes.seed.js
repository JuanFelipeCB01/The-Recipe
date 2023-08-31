const { default: mongoose } = require("mongoose");
const Recipe = require("../api/models/recipes.models");
const dotenv = require("dotenv").config();

const arrayRecipes = 
[
  {
    "name": "Galletas de Avena",
    "description": "Deliciosas galletas de avena ideales para un snack saludable.",
    "ingredients": [
      { "ingredient": "64f0b25b4e9d5661a9a98665", "quantity": "1 taza" }
    ],
    "preparations": [
      "Precalienta el horno a 180°C.",
      "En un tazón, aplasta la avena hasta obtener una textura más fina.",
      "Añade la avena aplastada a un tazón y mezcla con agua caliente.",
      "Deja reposar durante 10 minutos.",
      "Forma pequeñas bolitas con la masa y aplánalas para hacer las galletas.",
      "Coloca las galletas en una bandeja para hornear previamente engrasada o con papel de horno.",
      "Hornea durante 12-15 minutos o hasta que las galletas estén doradas en los bordes.",
      "Saca del horno y deja enfriar antes de disfrutar."
    ],
    "categories": ["Recetas Fáciles", "Recetas para Niños"],
    "country": "Internacional",
    "comments": [
      {
        "Usuario": "CocinaConAmor",
        "Comentario": "¡Estas galletas son increíbles! A mis hijos les encantan."
      },
      {
        "Usuario": "Foodie123",
        "Comentario": "Muy fácil de hacer y saben deliciosas. Definitivamente las recomiendo."
      }
    ],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_galletas.jpg",
    "likes": 0
  },
  {
    "name": "Ensalada de Salmón y Espinacas",
    "description": "Una ensalada fresca y saludable con salmón a la parrilla y espinacas.",
    "ingredients": [
      { "ingredient": "64f0b25b4e9d5661a9a98667", "quantity": "2 filetes" },
      { "ingredient": "64f0b25b4e9d5661a9a98668", "quantity": "2 tazas" }
    ],
    "preparations": [
      "Sazona los filetes de salmón con sal y pimienta al gusto.",
      "Asa el salmón a la parrilla.",
      "Lava y corta las espinacas en trozos pequeños.",
      "Coloca el salmón asado sobre las espinacas.",
      "Puedes añadir tu aderezo favorito antes de servir."
    ],
    "categories": ["Ensaladas", "Comida Saludable"],
    "country": "Internacional",
    "comments": [
      {
        "Usuario": "HealthyEater",
        "Comentario": "Esta ensalada es perfecta para una comida ligera y saludable."
      },
      {
        "Usuario": "FoodLover",
        "Comentario": "El salmón le da un toque delicioso a esta ensalada."
      }
    ],
    "chef": "64f0aecef7d5e7dbdc923c7d",
    "image": "imagen_ensalada.jpg",
    "likes": 0
  },
  {
    "name": "Batido de Plátano y Avena",
    "description": "Un batido nutritivo y delicioso para empezar bien el día.",
    "ingredients": [
      { "ingredient": "64f0b25b4e9d5661a9a9866b", "quantity": "1 unidad" },
      { "ingredient": "64f0b25b4e9d5661a9a98665", "quantity": "1/2 taza" }
    ],
    "preparations": [
      "Pela el plátano y córtalo en trozos.",
      "Añade el plátano y la avena a una licuadora.",
      "Agrega agua o leche según tu preferencia y licua hasta que esté suave.",
      "Sirve en un vaso y disfruta este batido saludable."
    ],
    "categories": ["Batidos", "Desayunos Saludables"],
    "country": "Internacional",
    "comments": [
      {
        "Usuario": "HealthyMorning",
        "Comentario": "Este batido es mi desayuno favorito. ¡Altamente recomendado!"
      },
      {
        "Usuario": "NutritionExpert",
        "Comentario": "Una excelente fuente de energía para comenzar el día."
      }
    ],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_batido.jpg",
    "likes": 0
  },
  {
    "name": "Salmón al Horno con Brócoli",
    "description": "Una comida saludable y deliciosa con salmón y brócoli al horno.",
    "ingredients": [
      { "ingredient": "64f0b25b4e9d5661a9a98667", "quantity": "2 filetes" },
      { "ingredient": "64f0b25b4e9d5661a9a9866d", "quantity": "2 tazas" }
    ],
    "preparations": [
      "Precalienta el horno a 180°C.",
      "Sazona los filetes de salmón con sal y pimienta al gusto.",
      "Coloca los filetes de salmón en una bandeja para hornear.",
      "Lava y corta el brócoli en trozos pequeños y agrégalo a la bandeja.",
      "Rocía un poco de aceite de oliva sobre el salmón y el brócoli.",
      "Hornea durante 20-25 minutos o hasta que el salmón esté cocido y el brócoli esté tierno."
    ],
    "categories": ["Platos Principales", "Comida Saludable"],
    "country": "Internacional",
    "comments": [
      {
        "Usuario": "ChefSaludable",
        "Comentario": "Este plato es una excelente opción para una comida saludable y deliciosa."
      },
      {
        "Usuario": "FoodEnthusiast",
        "Comentario": "El salmón al horno siempre es una buena elección."
      }
    ],
    "chef": "64f0aecef7d5e7dbdc923c7d",
    "image": "imagen_salmon_brocoli.jpg",
    "likes": 0
  },
  {
    "name": "Revuelto de Huevo con Espinacas",
    "description": "Un desayuno rápido y nutritivo con huevo y espinacas frescas.",
    "ingredients": [
      { "ingredient": "64f0b25b4e9d5661a9a98669", "quantity": "2 unidades" },
      { "ingredient": "64f0b25b4e9d5661a9a98668", "quantity": "1 taza" }
    ],
    "preparations": [
      "En un sartén antiadherente, calienta un poco de aceite a fuego medio.",
      "Añade las espinacas y saltea hasta que se ablanden.",
      "Bate los huevos y agrégalos a las espinacas en la sartén.",
      "Revuelve hasta que los huevos estén cocidos.",
      "Sirve caliente y disfruta tu desayuno nutritivo."
    ],
    "categories": ["Desayunos", "Recetas Rápidas"],
    "country": "Internacional",
    "comments": [
      {
        "Usuario": "MorningChef",
        "Comentario": "Este revuelto es perfecto para un desayuno rápido y saludable."
      },
      {
        "Usuario": "FoodLover123",
        "Comentario": "Me encanta la combinación de huevo y espinacas."
      }
    ],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_revuelto_huevo.jpg",
    "likes": 0
  },
  {
    "name": "Sándwich de Pavo y Espinacas",
    "description": "Un sándwich saludable y delicioso con pavo y espinacas frescas.",
    "ingredients": [
      { "ingredient": "64f0b25b4e9d5661a9a9866e", "quantity": "4 rebanadas" },
      { "ingredient": "64f0b25b4e9d5661a9a98668", "quantity": "1 taza" }
    ],
    "preparations": [
      "Coloca las rebanadas de pavo sobre una rebanada de pan.",
      "Añade las espinacas frescas sobre el pavo.",
      "Cubre con otra rebanada de pan.",
      "Corta el sándwich en la mitad y sirve."
    ],
    "categories": ["Sándwiches", "Comida Rápida"],
    "country": "Internacional",
    "comments": [
      {
        "Usuario": "SandwichLover",
        "Comentario": "Este sándwich es mi almuerzo favorito. ¡Altamente recomendado!"
      },
      {
        "Usuario": "HealthyEater",
        "Comentario": "Una opción saludable y deliciosa para el almuerzo."
      }
    ],
    "chef": "64f0aecef7d5e7dbdc923c7d",
    "image": "imagen_sandwich_pavo.jpg",
    "likes": 0
  },
  {
    "name": "Smoothie de Plátano y Nueces",
    "description": "Un batido energético y delicioso con plátano y nueces.",
    "ingredients": [
      { "ingredient": "64f0b25b4e9d5661a9a9866b", "quantity": "1 unidad" },
      { "ingredient": "64f0b25b4e9d5661a9a9866c", "quantity": "1/4 taza" }
    ],
    "preparations": [
      "Pela el plátano y córtalo en trozos.",
      "Añade el plátano y las nueces a una licuadora.",
      "Agrega leche o yogur según tu preferencia y licua hasta que esté suave.",
      "Sirve en un vaso y disfruta este batido energético."
    ],
    "categories": ["Batidos", "Meriendas Saludables"],
    "country": "Internacional",
    "comments": [
      {
        "Usuario": "SmoothieLover",
        "Comentario": "Este smoothie es mi merienda favorita. ¡Muy sabroso!"
      },
      {
        "Usuario": "NutritionFan",
        "Comentario": "Una excelente fuente de energía y proteínas."
      }
    ],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_smoothie_platano.jpg",
    "likes": 0
  },
  {
    "name": "Sopa de Brócoli",
    "description": "Una sopa reconfortante y saludable con brócoli fresco.",
    "ingredients": [
      { "ingredient": "64f0b25b4e9d5661a9a9866d", "quantity": "2 tazas" },
      { "ingredient": "64f0b25b4e9d5661a9a98665", "quantity": "1/4 taza" }
    ],
    "preparations": [
      "Lava y corta el brócoli en trozos pequeños.",
      "En una olla grande, cocina el brócoli con suficiente agua hasta que esté tierno.",
      "Añade la avena y cocina hasta que la sopa espese.",
      "Sazona al gusto con sal y pimienta.",
      "Sirve caliente y disfruta esta sopa reconfortante."
    ],
    "categories": ["Sopas", "Comida Saludable"],
    "country": "Internacional",
    "comments": [
      {
        "Usuario": "SoupLover",
        "Comentario": "Esta sopa es perfecta para un día frío. ¡Muy deliciosa!"
      },
      {
        "Usuario": "HealthyEater",
        "Comentario": "Una opción saludable y reconfortante para la cena."
      }
    ],
    "chef": "64f0aecef7d5e7dbdc923c7d",
    "image": "imagen_sopa_brocoli.jpg",
    "likes": 0
  },
  {
    "name": "Tostadas de Aguacate y Huevo",
    "description": "Un desayuno nutritivo y delicioso con aguacate y huevo.",
    "ingredients": [
      { "ingredient": "64f0b25b4e9d5661a9a98669", "quantity": "2 unidades" },
      { "ingredient": "64f0b25b4e9d5661a9a98665", "quantity": "1/4 taza" }
    ],
    "preparations": [
      "En un sartén antiadherente, calienta un poco de aceite a fuego medio.",
      "Fría los huevos según tu preferencia (escalfados o fritos).",
      "Tuesta las rebanadas de pan.",
      "Unta aguacate sobre las tostadas.",
      "Coloca los huevos fritos sobre el aguacate.",
      "Espolvorea con avena y pimienta al gusto.",
      "Sirve caliente y disfruta este desayuno nutritivo."
    ],
    "categories": ["Desayunos", "Recetas Rápidas"],
    "country": "Internacional",
    "comments": [
      {
        "Usuario": "MorningDelight",
        "Comentario": "Estas tostadas son mi desayuno favorito. ¡Altamente recomendado!"
      },
      {
        "Usuario": "FoodLover123",
        "Comentario": "La combinación de aguacate y huevo es increíble."
      }
    ],
    "chef": "64f0aecef7d5e7dbdc923c7d",
    "image": "imagen_tostadas_aguacate.jpg",
    "likes": 0
  },
  {
    "name": "Smoothie de Plátano y Nueces",
    "description": "Un batido energético y delicioso con plátano y nueces.",
    "ingredients": [
      { "ingredient": "64f0b25b4e9d5661a9a9866b", "quantity": "1 unidad" },
      { "ingredient": "64f0b25b4e9d5661a9a9866c", "quantity": "1/4 taza" }
    ],
    "preparations": [
      "Pela el plátano y córtalo en trozos.",
      "Añade el plátano y las nueces a una licuadora.",
      "Agrega leche o yogur según tu preferencia y licua hasta que esté suave.",
      "Sirve en un vaso y disfruta este batido energético."
    ],
    "categories": ["Batidos", "Meriendas Saludables"],
    "country": "Internacional",
    "comments": [
      {
        "Usuario": "SmoothieLover",
        "Comentario": "Este smoothie es mi merienda favorita. ¡Muy sabroso!"
      },
      {
        "Usuario": "NutritionFan",
        "Comentario": "Una excelente fuente de energía y proteínas."
      }
    ],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_smoothie_platano.jpg",
    "likes": 0
  }
]


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
