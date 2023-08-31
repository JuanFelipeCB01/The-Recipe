const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        name: { type: Schema.Types.ObjectId, required: true, ref: "user" },
        likes: {type:Number, required: false},
        content: {type:String, required: true},
    },{
        collection: 'comments',
        timestamps: true
    }
)

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;