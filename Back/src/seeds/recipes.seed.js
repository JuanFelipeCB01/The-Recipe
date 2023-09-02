const { default: mongoose } = require("mongoose");
const Recipe = require("../api/models/recipes.models");
const dotenv = require("dotenv").config();

const arrayRecipes = 
[
  {
    "name": "Galletas de Avena",
    "description": "Deliciosas galletas de avena ideales para un snack saludable.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d557191", "quantity": "1 taza" }
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
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_galletas.jpg",
    "likes": 0
  },
  {
    "name": "Ensalada de Manzana",
    "description": "Una ensalada refrescante con manzanas y nueces.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d557192", "quantity": "2 manzanas" },
      { "ingredient": "64f1c05a310dc5167d557199", "quantity": "1 taza de nueces" }
    ],
    "preparations": [
      "Lava y corta las manzanas en trozos pequeños.",
      "En un tazón grande, mezcla las manzanas con las nueces.",
      "Sirve y disfruta esta ensalada refrescante."
    ],
    "categories": ["Ensaladas", "Recetas Saludables"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_ensalada_manzana.jpg",
    "likes": 0
  },
  {
    "name": "Salmón a la Parrilla",
    "description": "Salmón a la parrilla con limón y hierbas.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d557193", "quantity": "2 filetes de salmón" },
      { "ingredient": "64f1c05a310dc5167d5571a1", "quantity": "1 limón, en rodajas" },
      { "ingredient": "64f1c05a310dc5167d5571a2", "quantity": "2 zanahorias, en rodajas" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "3 dientes de ajo, picados" },
      { "ingredient": "64f1c05a310dc5167d5571a4", "quantity": "1 pimiento verde, en tiras" }
    ],
    "preparations": [
      "Precalienta la parrilla a fuego medio-alto.",
      "Coloca los filetes de salmón en una bandeja.",
      "Añade las rodajas de limón, zanahorias, ajo picado y tiras de pimiento verde sobre el salmón.",
      "Sazona con sal y pimienta al gusto.",
      "Cubre la bandeja con papel de aluminio y colócala en la parrilla caliente.",
      "Cocina durante 10-15 minutos o hasta que el salmón esté cocido y las verduras estén tiernas.",
      "Sirve caliente y disfruta de tu salmón a la parrilla."
    ],
    "categories": ["Platos Principales", "Pescado"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_salmon_parrilla.jpg",
    "likes": 0
  },
  {
    "name": "Ensalada de Espinacas",
    "description": "Una ensalada fresca y saludable con espinacas frescas y aderezo de mostaza.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d557194", "quantity": "4 tazas de espinacas frescas" },
      { "ingredient": "64f1c05a310dc5167d55719c", "quantity": "1/2 cebolla roja, en rodajas finas" },
      { "ingredient": "64f1c05a310dc5167d5571a1", "quantity": "1 limón, el jugo" },
      { "ingredient": "64f1c05a310dc5167d5571a2", "quantity": "1 zanahoria, rallada" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "2 dientes de ajo, picados" }
    ],
    "preparations": [
      "Lava las espinacas y escúrrelas bien.",
      "En un tazón grande, mezcla las espinacas, la cebolla roja, la zanahoria rallada y el ajo picado.",
      "Exprime el jugo de limón sobre la ensalada y mezcla bien.",
      "Sirve la ensalada de espinacas con aderezo de mostaza y disfruta."
    ],
    "categories": ["Ensaladas", "Recetas Saludables"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_ensalada_espinacas.jpg",
    "likes": 0
  },
  {
    "name": "Huevos Revueltos",
    "description": "Huevos revueltos con queso y espinacas.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d557195", "quantity": "4 huevos" },
      { "ingredient": "64f1c05a310dc5167d5571a4", "quantity": "50 g de pimiento verde, picado" },
      { "ingredient": "64f1c05a310dc5167d55719e", "quantity": "2 cucharadas de aceite de oliva" },
      { "ingredient": "64f1c05a310dc5167d5571a2", "quantity": "1 zanahoria, en rodajas" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "2 dientes de ajo, picados" }
    ],
    "preparations": [
      "En un tazón, bate los huevos y reserva.",
      "En una sartén grande, calienta el aceite de oliva a fuego medio-alto.",
      "Añade el ajo picado, el pimiento verde y la zanahoria a la sartén y saltea durante 3-4 minutos.",
      "Agrega los huevos batidos a la sartén y revuelve constantemente hasta que estén cocidos.",
      "Retira del fuego, añade queso y espinacas, y revuelve hasta que el queso se derrita.",
      "Sirve los huevos revueltos calientes y disfruta."
    ],
    "categories": ["Desayunos", "Platos Principales"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_huevos_revueltos.jpg",
    "likes": 0
  },
  {
    "name": "Ensalada de Quinua",
    "description": "Una ensalada nutritiva con quinua, verduras y aderezo de limón.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d557196", "quantity": "1 taza de quinua cocida" },
      { "ingredient": "64f1c05a310dc5167d5571a1", "quantity": "1 limón, el jugo" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "2 dientes de ajo, picados" },
      { "ingredient": "64f1c05a310dc5167d5571a4", "quantity": "1 pimiento verde, picado" },
      { "ingredient": "64f1c05a310dc5167d5571a2", "quantity": "1 zanahoria, rallada" }
    ],
    "preparations": [
      "En un tazón grande, mezcla la quinua cocida, el jugo de limón y el ajo picado.",
      "Añade el pimiento verde picado y la zanahoria rallada a la quinua y mezcla bien.",
      "Sirve la ensalada de quinua con aderezo de limón y disfruta."
    ],
    "categories": ["Ensaladas", "Recetas Saludables"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_ensalada_quinua.jpg",
    "likes": 0
  },
  {
    "name": "Batido de Plátano y Nueces",
    "description": "Un batido rico y nutritivo con plátano y nueces.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d557197", "quantity": "2 plátanos maduros" },
      { "ingredient": "64f1c05a310dc5167d557198", "quantity": "1 taza de nueces" },
      { "ingredient": "64f1c05a310dc5167d5571a0", "quantity": "1 taza de leche" },
      { "ingredient": "64f1c05a310dc5167d5571a1", "quantity": "1 limón, el jugo" }
    ],
    "preparations": [
      "En una licuadora, combina los plátanos, las nueces, la leche y el jugo de limón.",
      "Licua hasta obtener una mezcla suave y cremosa.",
      "Sirve el batido de plátano y nueces en un vaso y disfruta."
    ],
    "categories": ["Batidos", "Recetas Saludables"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_batido_platano_nueces.jpg",
    "likes": 0
  },
  {
    "name": "Brócoli al Vapor",
    "description": "Brócoli al vapor con ajo y aceite de oliva.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d557199", "quantity": "1 taza de nueces" },
      { "ingredient": "64f1c05a310dc5167d5571a2", "quantity": "1 zanahoria, en rodajas" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "2 dientes de ajo, picados" },
      { "ingredient": "64f1c05a310dc5167d5571a4", "quantity": "1 pimiento verde, en tiras" }
    ],
    "preparations": [
      "Lava y corta el brócoli en floretes.",
      "En una vaporera, coloca el brócoli y cocínalo al vapor durante 5-7 minutos, hasta que esté tierno pero aún crujiente.",
      "En una sartén, calienta el aceite de oliva y saltea el ajo picado hasta que esté fragante.",
      "Añade el brócoli cocido al vapor a la sartén y saltea durante unos minutos.",
      "Sirve el brócoli al vapor caliente y disfruta."
    ],
    "categories": ["Acompañamientos", "Vegetales"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_brocoli_vapor.jpg",
    "likes": 0
  },
  {
    "name": "Pechuga de Pavo a la Parrilla",
    "description": "Pechuga de pavo a la parrilla con pimientos y cebolla.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d5571a0", "quantity": "2 pechugas de pavo" },
      { "ingredient": "64f1c05a310dc5167d55719f", "quantity": "1 cebolla, en rodajas" },
      { "ingredient": "64f1c05a310dc5167d5571a1", "quantity": "1 limón, el jugo" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "2 dientes de ajo, picados" },
      { "ingredient": "64f1c05a310dc5167d5571a4", "quantity": "1 pimiento verde, en tiras" }
    ],
    "preparations": [
      "Precalienta la parrilla a fuego medio-alto.",
      "Coloca las pechugas de pavo en la parrilla y cocínalas durante 6-8 minutos por cada lado, o hasta que estén cocidas.",
      "Mientras tanto, en una sartén grande, calienta el aceite de oliva a fuego medio-alto.",
      "Añade el ajo picado, la cebolla en rodajas y el pimiento verde en tiras a la sartén y saltea durante 3-4 minutos.",
      "Exprime el jugo de limón sobre las verduras salteadas.",
      "Sirve las pechugas de pavo a la parrilla con las verduras y disfruta."
    ],
    "categories": ["Platos Principales", "Pavo"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_pechuga_pavo_parrilla.jpg",
    "likes": 0
  },
  {
    "name": "Ensalada de Pimiento Rojo",
    "description": "Una ensalada colorida con pimiento rojo y aguacate.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d5571a1", "quantity": "2 pimientos rojos, en tiras" },
      { "ingredient": "64f1c05a310dc5167d55719d", "quantity": "1 cebolla, en rodajas finas" },
      { "ingredient": "64f1c05a310dc5167d557197", "quantity": "1 plátano, en rodajas" },
      { "ingredient": "64f1c05a310dc5167d55719e", "quantity": "2 cucharadas de aceite de oliva" }
    ],
    "preparations": [
      "En un tazón grande, mezcla las tiras de pimiento rojo, la cebolla en rodajas y las rodajas de plátano.",
      "Rocía con aceite de oliva y mezcla bien.",
      "Sirve la ensalada de pimiento rojo y aguacate y disfruta."
    ],
    "categories": ["Ensaladas", "Vegetales"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_ensalada_pimiento_rojo.jpg",
    "likes": 0
  },
  {
    "name": "Salsa de Tomate Casera",
    "description": "Una deliciosa salsa de tomate casera para pasta y pizzas.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d5571a0", "quantity": "8 tomates maduros" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "3 dientes de ajo, picados" },
      { "ingredient": "64f1c05a310dc5167d5571a4", "quantity": "1 pimiento verde, picado" },
      { "ingredient": "64f1c05a310dc5167d557199", "quantity": "1 taza de nueces" }
    ],
    "preparations": [
      "Lava y corta los tomates en cubos.",
      "En una sartén grande, calienta el aceite de oliva a fuego medio-alto.",
      "Añade el ajo picado y el pimiento verde picado a la sartén y saltea durante 3-4 minutos.",
      "Añade los tomates en cubos y las nueces a la sartén y cocina a fuego lento durante 20-30 minutos, revolviendo ocasionalmente, hasta que la salsa espese.",
      "Sirve la salsa de tomate casera sobre pasta o pizzas y disfruta."
    ],
    "categories": ["Salsas", "Recetas Italianas"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_salsa_tomate_casera.jpg",
    "likes": 0
  },
  {
    "name": "Sopa de Zanahoria",
    "description": "Una sopa cremosa de zanahoria con un toque de jengibre.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d55719c", "quantity": "4 zanahorias, en rodajas" },
      { "ingredient": "64f1c05a310dc5167d5571a1", "quantity": "1 limón, el jugo" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "2 dientes de ajo, picados" },
      { "ingredient": "64f1c05a310dc5167d5571a4", "quantity": "1 pimiento verde, picado" }
    ],
    "preparations": [
      "En una olla grande, calienta el aceite de oliva a fuego medio-alto.",
      "Añade el ajo picado y el jengibre rallado a la olla y saltea durante 2-3 minutos.",
      "Agrega las zanahorias en rodajas y el pimiento verde picado a la olla y saltea durante otros 5 minutos.",
      "Añade suficiente agua para cubrir las verduras y lleva a ebullición.",
      "Reduce el fuego y cocina a fuego lento durante 20-25 minutos, o hasta que las zanahorias estén tiernas.",
      "Usa una licuadora de mano para hacer puré de la sopa hasta que quede suave.",
      "Añade el jugo de limón y sazona con sal y pimienta al gusto.",
      "Sirve la sopa de zanahoria caliente y disfruta."
    ],
    "categories": ["Sopas", "Recetas Saludables"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_sopa_zanahoria.jpg",
    "likes": 0
  },
  {
    "name": "Tostadas de Aguacate",
    "description": "Tostadas de aguacate con huevo y tomate.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d55719d", "quantity": "4 tostadas de pan integral" },
      { "ingredient": "64f1c05a310dc5167d5571a5", "quantity": "2 aguacates maduros" },
      { "ingredient": "64f1c05a310dc5167d5571a1", "quantity": "1 limón, el jugo" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "2 dientes de ajo, picados" },
      { "ingredient": "64f1c05a310dc5167d5571a4", "quantity": "1 pimiento verde, en tiras" }
    ],
    "preparations": [
      "Tuesta las tostadas de pan integral en una tostadora.",
      "Mientras tanto, en un tazón, machaca los aguacates maduros con el jugo de limón y el ajo picado.",
      "Extiende la mezcla de aguacate sobre las tostadas tostadas.",
      "Coloca las tiras de pimiento verde sobre el aguacate y agrega un huevo pochado en la parte superior de cada tostada.",
      "Sirve las tostadas de aguacate con huevo y disfruta."
    ],
    "categories": ["Desayunos", "Aperitivos"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_tostadas_aguacate.jpg",
    "likes": 0
  },
  {
    "name": "Pasta con Pesto",
    "description": "Pasta con salsa de pesto fresca y queso parmesano.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d5571a0", "quantity": "250 g de pasta" },
      { "ingredient": "64f1c05a310dc5167d5571a6", "quantity": "2 tazas de albahaca fresca" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "2 dientes de ajo, picados" },
      { "ingredient": "64f1c05a310dc5167d5571a7", "quantity": "1/2 taza de queso parmesano rallado" }
    ],
    "preparations": [
      "Cocina la pasta según las instrucciones del paquete hasta que esté al dente.",
      "Mientras tanto, en una licuadora, combina la albahaca fresca, el ajo picado, el queso parmesano rallado y suficiente aceite de oliva para hacer una pasta.",
      "Escurre la pasta cocida y mezcla con la salsa de pesto.",
      "Sirve la pasta con pesto caliente y disfruta."
    ],
    "categories": ["Pastas", "Recetas Italianas"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_pasta_pesto.jpg",
    "likes": 0
  },
  {
    "name": "Smoothie de Frutas",
    "description": "Un smoothie refrescante con una mezcla de frutas frescas.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d5571a8", "quantity": "1 plátano" },
      { "ingredient": "64f1c05a310dc5167d5571a9", "quantity": "1/2 taza de fresas" },
      { "ingredient": "64f1c05a310dc5167d5571aa", "quantity": "1/2 taza de arándanos" },
      { "ingredient": "64f1c05a310dc5167d5571ab", "quantity": "1/2 taza de yogur griego" }
    ],
    "preparations": [
      "En una licuadora, combina el plátano, las fresas, los arándanos y el yogur griego.",
      "Licua hasta obtener una mezcla suave y cremosa.",
      "Sirve el smoothie de frutas en un vaso y disfruta."
    ],
    "categories": ["Batidos", "Recetas Saludables"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_smoothie_frutas.jpg",
    "likes": 0
  },
  {
    "name": "Pollo al Curry",
    "description": "Pollo al curry con arroz y verduras.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d5571ac", "quantity": "4 pechugas de pollo" },
      { "ingredient": "64f1c05a310dc5167d5571ad", "quantity": "1 cebolla, picada" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "2 dientes de ajo, picados" },
      { "ingredient": "64f1c05a310dc5167d5571ae", "quantity": "1 taza de arroz" },
      { "ingredient": "64f1c05a310dc5167d5571af", "quantity": "1 lata de leche de coco" }
    ],
    "preparations": [
      "En una sartén grande, calienta aceite de oliva a fuego medio-alto.",
      "Añade la cebolla picada y el ajo picado y saltea durante 2-3 minutos.",
      "Agrega las pechugas de pollo y cocina hasta que estén doradas por ambos lados.",
      "Añade la leche de coco y el curry en polvo, y cocina a fuego lento durante 15-20 minutos, hasta que el pollo esté cocido y la salsa espese.",
      "Mientras tanto, cocina el arroz según las instrucciones del paquete.",
      "Sirve el pollo al curry sobre una cama de arroz y disfruta."
    ],
    "categories": ["Platos Principales", "Pollo"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_pollo_curry.jpg",
    "likes": 0
  },
  {
    "name": "Pasta Alfredo",
    "description": "Pasta Alfredo cremosa con queso parmesano.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d5571a0", "quantity": "250 g de pasta" },
      { "ingredient": "64f1c05a310dc5167d5571b0", "quantity": "1 taza de queso parmesano rallado" },
      { "ingredient": "64f1c05a310dc5167d5571b1", "quantity": "1 taza de crema espesa" },
      { "ingredient": "64f1c05a310dc5167d5571a3", "quantity": "2 dientes de ajo, picados" }
    ],
    "preparations": [
      "Cocina la pasta según las instrucciones del paquete hasta que esté al dente.",
      "Mientras tanto, en una sartén grande, derrite la mantequilla a fuego medio.",
      "Añade el ajo picado y saltea durante 1-2 minutos hasta que esté fragante.",
      "Agrega la crema espesa y el queso parmesano rallado a la sartén y revuelve hasta que la salsa esté suave y el queso se haya derretido por completo.",
      "Escurre la pasta cocida y mezcla con la salsa Alfredo cremosa.",
      "Sirve la pasta Alfredo caliente y disfruta."
    ],
    "categories": ["Pastas", "Recetas Italianas"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_pasta_alfredo.jpg",
    "likes": 0
  },
  {
    "name": "Ensalada César",
    "description": "Ensalada César clásica con pollo a la parrilla.",
    "ingredients": [
      { "ingredient": "64f1c05a310dc5167d5571b2", "quantity": "2 pechugas de pollo" },
      { "ingredient": "64f1c05a310dc5167d5571a2", "quantity": "1 zanahoria, en rodajas" },
      { "ingredient": "64f1c05a310dc5167d5571b3", "quantity": "2 tazas de lechuga romana, cortada en trozos" },
      { "ingredient": "64f1c05a310dc5167d5571a1", "quantity": "1 limón, el jugo" },
      { "ingredient": "64f1c05a310dc5167d5571b4", "quantity": "1/2 taza de crutones" }
    ],
    "preparations": [
      "Precalienta la parrilla a fuego medio-alto.",
      "Coloca las pechugas de pollo en la parrilla y cocínalas durante 6-8 minutos por cada lado, o hasta que estén cocidas.",
      "Mientras tanto, en un tazón grande, mezcla la lechuga romana y las rodajas de zanahoria.",
      "Exprime el jugo de limón sobre la ensalada y mezcla bien.",
      "Corta las pechugas de pollo a la parrilla en tiras y colócalas sobre la ensalada.",
      "Espolvorea los crutones sobre la ensalada César y disfruta."
    ],
    "categories": ["Ensaladas", "Pollo"],
    "country": "Internacional",
    "comments": [],
    "chef": "64f0aecef7d5e7dbdc923c7c",
    "image": "imagen_ensalada_cesar.jpg",
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
