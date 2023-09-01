const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
    {
        name: {type:String, required: true},
        description: {type:String, required: true},
        category: {type:String, rquired:false},
        energeticValue: {type:String, required: true},
        totalFat: {type:String, required: true},
        saturatedFat: {type:String, required: true},
        carbs: {type:String, required: true},
        sugars: {type:String, required: true},
        sodium: {type:String, required: true},
        image: {type:String, required: true},
    },{
        collection: 'ingredients',
    }
)

const Ingredient = mongoose.model("ingredients", ingredientSchema);

module.exports = Ingredient;