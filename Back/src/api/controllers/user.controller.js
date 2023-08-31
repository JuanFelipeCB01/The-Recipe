const User = require("../models/users.models");
const bcrypt = require("bcrypt");
const {
  validateEmail,
  validatePassword,
  validateEmailDB,
} = require("../../utils/validator");
const { generateSign } = require("../../utils/jwt");



const register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    if (!validateEmail(newUser.email)) {
      return res.status(400).json({ message: "Email invalid" });
    }
    if (!validatePassword(newUser.password)) {
      return res.status(400).json({ message: "Password invalid" });
    }
    if (await validateEmailDB(newUser.email)) {
      return res.status(400).json({ message: "This email already exists" });
    }
    console.log("All ok");
    newUser.password = bcrypt.hashSync(newUser.password, 15);
    console.log(newUser.password);
    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(530).json(error);
  }
};

const login = async (req, res) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email });
    console.log("userinfo", userInfo);
    if (!userInfo) {
      return res.status(404).json({ message: "Password or email incorrect" });
    }
    if (!bcrypt.compareSync(req.body.password, userInfo.password)) {
      return res.status(404).json({ message: "Password or email incorrect" });
    }
    const token = generateSign(userInfo._id, userInfo.email);
    return res.status(200).json({ user: userInfo, token: token });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const profile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("recipes");
    if (!user) {
      return res.status(404).json({ message: "User not found :(" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUsers = async (req, res) => {
    try {
      const allUsers = await User.find().populate("recipes");
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const deleteUser = async (req, res) =>{
    try {
      const {id} = req.params;
      const deleteUser = await User.findByIdAndDelete(id)
      if(!deleteUser){
        return res.status(418).json({message: "What are you doing??"})
      }
      return res.status(200).json(deleteUser)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const updateUser = new User(req.body);
      updateUser.id = id;

      if (!validatePassword(updateUser.password)) {
        return res.status(400).json({ message: "Password invalid" });
      }

      const updatedInfo = await User.findByIdAndUpdate(id, updateUser, {
        new: true,
      });
      if (!updatedInfo) {
        return res.status(404).json({ message: "Not find :(" });
      }
      return res.status(200).json(updatedInfo);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

module.exports = { register, login, profile, getUsers, deleteUser, updateUser };
