const express = require('express');
const {register, login, getUsers, deleteUser, updateUser, profile} = require("../controllers/user.controller");
const { isAdmin, isAuth } = require('../../middlewares/auth');

const userRouter = express.Router();


userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/:id", isAuth, profile);

userRouter.get("/", getUsers);
userRouter.delete("/:id", isAdmin, deleteUser);
userRouter.put("/:id", isAuth, updateUser)


module.exports = userRouter;