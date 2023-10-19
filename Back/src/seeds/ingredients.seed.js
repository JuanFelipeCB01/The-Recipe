const { default: mongoose } = require("mongoose");
const Ingredient = require("../api/models/ingredients.models");
const dotenv = require('dotenv').config();

const arrayIngredients = 
[
    {
      "name": "Avena",
      "description": "La avena es un grano saludable y versátil, rico en fibra y nutrientes esenciales.",
      "category": "Cereal",
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
      "category": "Fruit",
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
      "category": "Fish",
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
      "category": "Vegetable",
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
      "category": "Meat",
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
      "category": "Cereal",
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
      "category": "Fruit",
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
      "category": "Fruit",
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
      "category": "Vegetable",
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
      "category": "Meat",
      "energeticValue": "135 kcal",
      "totalFat": "1.1 g",
      "saturatedFat": "0.3 g",
      "carbs": "0 g",
      "sugars": "0 g",
      "sodium": "0.05 g",
      "image": "https://www.elfinanciero.com.mx/resizer/pj7ftfo9ZE6CY_pxeXCnhM0T4iQ=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/QQ3RBX5JBZFODEVUCC36W4PGQU.jpg"
    },
    {
      "name": "Pimiento rojo",
      "description": "El pimiento rojo es una verdura sabrosa y llena de vitamina C.",
      "category": "Vegetable",
      "energeticValue": "31 kcal",
      "totalFat": "0.4 g",
      "saturatedFat": "0.1 g",
      "carbs": "7.2 g",
      "sugars": "4.2 g",
      "sodium": "1 mg",
      "image": "https://fruittoday.com/wp-content/uploads/2023/03/es-bueno-comer-pimiento-rojo-e1679312898535.jpg"
  },
  {
      "name": "Cebolla",
      "description": "La cebolla es un aromatizante esencial en muchas cocinas.",
      "category": "Vegetable",
      "energeticValue": "40 kcal",
      "totalFat": "0.1 g",
      "saturatedFat": "0 g",
      "carbs": "9.3 g",
      "sugars": "4.7 g",
      "sodium": "2 mg",
      "image": "https://www.eltiempo.com/files/article_main_1200/uploads/2023/01/24/63d057f760eb7.jpeg"
  },
  {
      "name": "Ajo",
      "description": "El ajo es una especia con un sabor fuerte y beneficios para la salud.",
      "category": "Vegetables",
      "energeticValue": "149 kcal",
      "totalFat": "0.5 g",
      "saturatedFat": "0.2 g",
      "carbs": "33.1 g",
      "sugars": "1 g",
      "sodium": "17 mg",
      "image": "https://s1.eestatic.com/2019/12/12/como/jardineria-cocina-frutas_451466045_140320241_1706x960.jpg"
  },
  {
      "name": "Aceite de oliva",
      "description": "El aceite de oliva es una grasa saludable ampliamente utilizada en la cocina mediterránea.",
      "category": "Oil",
      "energeticValue": "884 kcal",
      "totalFat": "100 g",
      "saturatedFat": "14 g",
      "carbs": "0 g",
      "sugars": "0 g",
      "sodium": "2 mg",
      "image": "https://www.semana.com/resizer/QNlsZErxavjU9rAPx9Uy8AbK_fc=/1920x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/QNFYBUKVGZA53LOJWLH4YAPZTY.jpg"
  },
  {
      "name": "Pechuga de pollo",
      "description": "La pechuga de pollo es una fuente magra de proteína.",
      "category": "Meat",
      "energeticValue": "165 kcal",
      "totalFat": "3.6 g",
      "saturatedFat": "1 g",
      "carbs": "0 g",
      "sugars": "0 g",
      "sodium": "74 mg",
      "image": "https://dietpremium.es/wp-content/uploads/2016/04/pechuga-entera-510x340.jpg"
  },
  {
    "name": "Tomate",
    "description": "El tomate es una fruta versátil y rica en vitamina C.",
    "category": "Vegetable",
    "energeticValue": "18 kcal",
    "totalFat": "0.2 g",
    "saturatedFat": "0 g",
    "carbs": "3.9 g",
    "sugars": "2.6 g",
    "sodium": "5 mg",
    "image": "https://images.hola.com/imagenes/estar-bien/20230727236387/tomate-propiedades-saludables-dieta/1-286-101/tomate-t.jpg?tx=w_680"
},
{
    "name": "Zanahoria",
    "description": "La zanahoria es una raíz dulce y crujiente llena de vitamina A.",
    "category": "Vegetable",
    "energeticValue": "41 kcal",
    "totalFat": "0.2 g",
    "saturatedFat": "0 g",
    "carbs": "10 g",
    "sugars": "4.7 g",
    "sodium": "69 mg",
    "image": "https://img2.rtve.es/i/?w=1600&i=1653900605754.jpg"
},
{
    "name": "Limón",
    "description": "El limón es una fruta cítrica ácida utilizada para dar sabor y aroma.",
    "category": "Fruit",
    "energeticValue": "29 kcal",
    "totalFat": "0.3 g",
    "saturatedFat": "0 g",
    "carbs": "9.3 g",
    "sugars": "2.5 g",
    "sodium": "2 mg",
    "image": "https://estaticos-cdn.prensaiberica.es/clip/2374daff-c6ac-4e03-bc37-55ce3ecbe32b_16-9-discover-aspect-ratio_default_0.jpg"
},
{
    "name": "Harina de trigo integral",
    "description": "La pasta de trigo integral es una opción más saludable que la pasta regular.",
    "category": "Cereal",
    "energeticValue": "180 kcal",
    "totalFat": "1 g",
    "saturatedFat": "0.2 g",
    "carbs": "39 g",
    "sugars": "2 g",
    "sodium": "2 mg",
    "image": "https://i.blogs.es/95d4c3/harina-trigo-tipos/1366_2000.jpg"
},
{
    "name": "Pimiento verde",
    "description": "El pimiento verde es un vegetal crujiente y bajo en calorías.",
    "category": "Vegetable",
    "energeticValue": "20 kcal",
    "totalFat": "0.2 g",
    "saturatedFat": "0 g",
    "carbs": "4.6 g",
    "sugars": "2.4 g",
    "sodium": "2 mg",
    "image": "https://www.nutricienta.com/imagenes/alimentos/alimento-nutricienta-pimiento-verde.jpg"
},
{
  "name": "Patatas",
  "description": "Las patatas son un vegetal versátil y abundante en carbohidratos.",
  "category": "Vegetable",
  "energeticValue": "77 kcal",
  "totalFat": "0.1 g",
  "saturatedFat": "0 g",
  "carbs": "17 g",
  "sugars": "1 g",
  "sodium": "6 mg",
  "image": "https://img2.rtve.es/i/?w=1600&i=1680518975160.jpg"
},
{
  "name": "Perejil",
  "description": "El perejil es una hierba aromática utilizada para realzar el sabor de los platos.",
  "category": "Herb",
  "energeticValue": "36 kcal",
  "totalFat": "0.8 g",
  "saturatedFat": "0.1 g",
  "carbs": "6.3 g",
  "sugars": "0.9 g",
  "sodium": "56 mg",
  "image": "https://static.abc.es/media/bienestar/2021/11/24/perejil-kpgH--1200x630@abc.jpg"
},
{
  "name": "Calabacín",
  "description": "El calabacín es una verdura de sabor suave y textura tierna.",
  "category": "Vegetable",
  "energeticValue": "17 kcal",
  "totalFat": "0.3 g",
  "saturatedFat": "0.1 g",
  "carbs": "3.1 g",
  "sugars": "2.4 g",
  "sodium": "8 mg",
  "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/04/calabacin.jpg"
},
{
  "name": "Aguacate",
  "description": "El aguacate es una fruta cremosa y rica en grasas saludables.",
  "category": "Fruit",
  "energeticValue": "160 kcal",
  "totalFat": "14.7 g",
  "saturatedFat": "2.1 g",
  "carbs": "8.5 g",
  "sugars": "0.2 g",
  "sodium": "7 mg",
  "image": "https://s1.abcstatics.com/media/bienestar/2019/07/22/aguacate-ficha-k9O--620x349@abc.jpg"
},
{
  "name": "Albahaca",
  "description": "La albahaca es una hierba aromática utilizada en la cocina italiana.",
  "category": "Herbs",
  "energeticValue": "23 kcal",
  "totalFat": "0.6 g",
  "saturatedFat": "0.1 g",
  "carbs": "2.7 g",
  "sugars": "0.3 g",
  "sodium": "4 mg",
  "image": "https://s1.abcstatics.com/media/bienestar/2021/06/23/albahaca-kFFI--620x349@abc.jpg"
},
{
  "name": "Judías verdes",
  "description": "Las judías verdes son un vegetal bajo en calorías y rico en fibra.",
  "category": "Vegetable",
  "energeticValue": "31 kcal",
  "totalFat": "0.2 g",
  "saturatedFat": "0 g",
  "carbs": "7.1 g",
  "sugars": "2.9 g",
  "sodium": "6 mg",
  "image": "https://mercadoermitagana.com/wp-content/uploads/2021/09/judias-verdes.jpg"
},
{
  "name": "Pimienta negra",
  "description": "La pimienta negra es una especia picante ampliamente utilizada en la cocina.",
  "category": "Spice",
  "energeticValue": "251 kcal",
  "totalFat": "3.3 g",
  "saturatedFat": "1 g",
  "carbs": "64 g",
  "sugars": "0.6 g",
  "sodium": "20 mg",
  "image": "https://s3.abcstatics.com/media/bienestar/2022/01/22/pimienta-negra-kjQB--1248x698@abc.jpg"
},
{
  "name": "Champiñones",
  "description": "Los champiñones son hongos suaves y versátiles utilizados en una variedad de platos.",
  "category": "Fungus",
  "energeticValue": "22 kcal",
  "totalFat": "0.3 g",
  "saturatedFat": "0 g",
  "carbs": "3.3 g",
  "sugars": "1.7 g",
  "sodium": "5 mg",
  "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/08/champinon.jpg"
},
{
  "name": "Puerro",
  "description": "El puerro es una verdura de sabor suave y aroma similar a la cebolla.",
  "category": "Vegetable",
  "energeticValue": "61 kcal",
  "totalFat": "0.5 g",
  "saturatedFat": "0.1 g",
  "carbs": "14.9 g",
  "sugars": "3.9 g",
  "sodium": "20 mg",
  "image": "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-01/puerro%C2%A9iStock.jpg?itok=KMoftZcx"
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