const express = require('express');
const {register, login, getUsers, deleteUser, updateUser} = require("../controllers/user.controller");
const { isAdmin } = require('../../middlewares/auth');

const userRouter = express.Router();


userRouter.post("/register", register);
userRouter.post("/login", login);

userRouter.get("/", getUsers);
userRouter.delete("/:id", isAdmin, deleteUser);
userRouter.put("/:id", isAdmin, updateUser)


module.exports = userRouter;