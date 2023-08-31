const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {type:String, required: true},
        role:{type:String, default:"user", enum:["user","admin"]},
        email: {type:String, required: true, unique: true},
        age: {type:Number, required: true},
        password: {type:String, required: true},
        image: {type:String, required: false},
        recipes: [{ type: Schema.Types.ObjectId, required: false, ref: "recipes" }],
        comments: [{ type: Schema.Types.ObjectId, required: false, ref: "comments" }]
    },{
        collection: 'users',
    }
)

const User = mongoose.model("users", userSchema);

module.exports = User;