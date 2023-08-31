const Comments = require("../models/comments.models");

const getComments = async (req, res) => {
  try {
    const allComments = await Comments.find();
    return res.status(200).json(allComments);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postComments = async (req, res) => {
    try {
      const newComments = req.body;
      const createdComments = new Comments(newComments);
      const created = await createdComments.save();
      return res.status(200).json(created);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const updateComments = async (req, res) => {
    try {
      const { id } = req.params;
      const updateComments = new Comments(req.body);
      updateComments.id = id;
      const updatedInfo = await Comments.findByIdAndUpdate(
        id, updateComments, { new: true }
      );
      if (!updatedInfo) {
        return res.status(404).json({ message: "No encontrado :(" });
      }
      return res.status(200).json(updatedInfo);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const deleteComments = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteComments = await Comments.findByIdAndDelete(id);
      if (!deleteComments) {
        return res.status(418).json({ message: "Can't delete" });
      }
      return res.status(200).json(deleteComments);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

module.exports = { getComments, postComments, updateComments, deleteComments };