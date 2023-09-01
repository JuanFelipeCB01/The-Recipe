const { default: mongoose } = require("mongoose");
const Ingredient = require("../api/models/ingredients.models");
const dotenv = require('dotenv').config();

const arrayIngredients = 
[
    {
      "name": "Avena",
      "description": "La avena es un grano saludable y versátil, rico en fibra y nutrientes esenciales.",
      "energeticValue": "389 kcal",
      "totalFat": "6.9 g",
      "saturatedFat": "1.2 g",
      "carbs": "67.7 g",
      "sugars": "0.99 g",
      "sodium": "0.01 g",
      "image": "https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-04/avena.jpg.jpg?itok=SgCou3hU"
    },
    {
      "name": "Manzana",
      "description": "La manzana es una fruta deliciosa y nutritiva, rica en fibra y antioxidantes.",
      "energeticValue": "52 kcal",
      "totalFat": "0.2 g",
      "saturatedFat": "0.03 g",
      "carbs": "14 g",
      "sugars": "10 g",
      "sodium": "0.01 g",
      "image": "https://www.bupasalud.com/sites/default/files/inline-images/fuji-red.jpg"
    },
    {
      "name": "Salmón",
      "description": "El salmón es un pescado rico en ácidos grasos omega-3 y proteínas de alta calidad.",
      "energeticValue": "206 kcal",
      "totalFat": "13.4 g",
      "saturatedFat": "3.1 g",
      "carbs": "0 g",
      "sugars": "0 g",
      "sodium": "0.06 g",
      "image": "https://www.cucinare.tv/wp-content/uploads/2020/06/Salm%C3%B3n-rosado.jpg"
    },
    {
      "name": "Espinacas",
      "description": "Las espinacas son una verdura de hojas verdes cargada de hierro y vitaminas.",
      "energeticValue": "23 kcal",
      "totalFat": "0.4 g",
      "saturatedFat": "0.1 g",
      "carbs": "3.6 g",
      "sugars": "0.4 g",
      "sodium": "0.08 g",
      "image": "https://i.blogs.es/5ee30a/istock-522189977/1366_2000.jpg"
    },
    {
      "name": "Huevo",
      "description": "El huevo es una fuente de proteínas de alta calidad y varios nutrientes esenciales.",
      "energeticValue": "155 kcal",
      "totalFat": "10.6 g",
      "saturatedFat": "3.3 g",
      "carbs": "1.1 g",
      "sugars": "1.1 g",
      "sodium": "0.13 g",
      "image": "https://imagenes.lainformacion.com/files/og_thumbnail_1900/uploads/imagenes/2022/10/14/huevos.jpeg"
    },
    {
      "name": "Quinua",
      "description": "La quinua es un superalimento rico en proteínas, fibra y minerales.",
      "energeticValue": "120 kcal",
      "totalFat": "1.9 g",
      "saturatedFat": "0.2 g",
      "carbs": "21.3 g",
      "sugars": "0.9 g",
      "sodium": "0.02 g",
      "image": "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2017/09/27/59cc1bf0bfd1d.r_1643808073234.0-390-2451-1614.jpeg"
    },
    {
      "name": "Plátano",
      "description": "El plátano es una fruta energética y rica en potasio, vitaminas y fibra.",
      "energeticValue": "89 kcal",
      "totalFat": "0.3 g",
      "saturatedFat": "0.1 g",
      "carbs": "23 g",
      "sugars": "12 g",
      "sodium": "0.01 g",
      "image": "https://s2.abcstatics.com/media/bienestar/2023/04/17/platano-beneficios-1-kVAG--620x349@abc.jpg"
    },
    {
      "name": "Nueces",
      "description": "Las nueces son frutos secos llenos de grasas saludables, proteínas y antioxidantes.",
      "energeticValue": "654 kcal",
      "totalFat": "65.2 g",
      "saturatedFat": "6.1 g",
      "carbs": "13.7 g",
      "sugars": "2.6 g",
      "sodium": "0.01 g",
      "image": "https://www.adelgar.es/wp-content/uploads/2017/01/nueces-1.jpg"
    },
    {
      "name": "Brócoli",
      "description": "El brócoli es una verdura crucífera llena de vitaminas y antioxidantes.",
      "energeticValue": "34 kcal",
      "totalFat": "0.6 g",
      "saturatedFat": "0.1 g",
      "carbs": "6.6 g",
      "sugars": "1.5 g",
      "sodium": "0.33 g",
      "image": "https://s2.abcstatics.com/media/bienestar/2020/09/22/brocoli-1-kTsD--620x349@abc.jpg"
    },
    {
      "name": "Pavo",
      "description": "El pavo es una carne magra rica en proteínas y baja en grasa.",
      "energeticValue": "135 kcal",
      "totalFat": "1.1 g",
      "saturatedFat": "0.3 g",
      "carbs": "0 g",
      "sugars": "0 g",
      "sodium": "0.05 g",
      "image": "https://www.elfinanciero.com.mx/resizer/pj7ftfo9ZE6CY_pxeXCnhM0T4iQ=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/QQ3RBX5JBZFODEVUCC36W4PGQU.jpg"
    }
  ]

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