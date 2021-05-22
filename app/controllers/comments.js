const mongoose = require('mongoose')

const Comments = mongoose.model('Comments')

const getComments = async (req, res) => {
  try {
    const sort = req.query.sort?.trim() || 'asc'
    const comments = await Comments.find({}, ['_id', 'name', 'message']).sort({
      date: sort,
    })
    res.status(200).json(comments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const addComment = async (req, res) => {
  try {
    const { name, message, date } = req.body
    const {
      _id,
      createdName = name,
      createdMessage = message,
    } = await Comments.create({
      name,
      message,
      date,
    })
    res.status(201).json({ _id, name: createdName, message: createdMessage })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getComments,
  addComment,
}
