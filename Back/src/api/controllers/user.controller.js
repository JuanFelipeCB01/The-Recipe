const User = require("../models/users.models");

const getUsers = async (req, res) => {
    try {
      const allUsers = await User.find();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json(error);
    }
  };