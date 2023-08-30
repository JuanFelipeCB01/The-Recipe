const { default: mongoose } = require("mongoose");
const Comment = require("../api/models/comments.models");
const dotenv = require('dotenv').config();

const arrayComments = [
    {
        "name": "64ef5c055258d85e97d9d498",
        "likes": 0,
        "content": "Increible receta",
      }
];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allComments = await Comment.find();
    if (allComments.length > 0) {
        await Comment.collection.drop();
        console.log("Comments deleted");
    }
})
.catch((error)=> console.log("error deleting comments",error))
.then(async ()=> {
    const commentMap = arrayComments.map((comment) => new Comment(comment));
    await Comment.insertMany(commentMap);
    console.log("comments insert correctly");
})
.catch((error) => console.log("error inserting comments", error))
.finally(()=> mongoose.disconnect())