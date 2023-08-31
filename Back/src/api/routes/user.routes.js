const express = require('express');
const {register, login, getUsers, deleteUser, updateUser} = require("../controllers/user.controller")

const userRouter = express.Router();


userRouter.post("/register", register);
userRouter.post("/login", login);

userRouter.get("/", getUsers);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser)


module.exports = userRouter;