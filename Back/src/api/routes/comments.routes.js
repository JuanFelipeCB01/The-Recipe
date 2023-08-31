const express = require('express');
const { getComments, postComments, updateComments, deleteComments } = require('../controllers/comments.controller');
const { isAuth } = require('../../middlewares/auth');


const commentsRouter = express.Router();

commentsRouter.get("/", getComments);
commentsRouter.post("/", isAuth, postComments);
commentsRouter.put("/:id", isAuth, updateComments);
commentsRouter.delete("/:id", isAuth, deleteComments);



module.exports = commentsRouter;