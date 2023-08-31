const express = require('express');
const { getComments, postComments, updateComments, deleteComments } = require('../controllers/comments.controller');


const commentsRouter = express.Router();

commentsRouter.get("/", getComments);
commentsRouter.post("/", postComments);
commentsRouter.put("/:id", updateComments);
commentsRouter.delete("/:id", deleteComments);



module.exports = commentsRouter;