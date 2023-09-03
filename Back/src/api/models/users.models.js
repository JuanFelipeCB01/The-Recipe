const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {type:String, required: true},
        role:{type:String, default:"user", enum:["user","admin"]},
        email: {type:String, required: true, unique: true},
        age: {type:Number, required: true},
        password: {type:String, required: true},
        image: {type:String, default: "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg", required: false},
        recipes: [{ type: Schema.Types.ObjectId, required: false, ref: "recipes" }],
        comments: [{ type: Schema.Types.ObjectId, required: false, ref: "comments" }]
    },{
        collection: 'users',
    }
)

const User = mongoose.model("users", userSchema);

module.exports = User;