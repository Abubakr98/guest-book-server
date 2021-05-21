const mongoose = require('mongoose')

const Comments = mongoose.model('Comments')

const getComments = async (req, res) => {
  try {
    const sort = req.query.sort.trim()
    const comments = await Comments.find({}, ['name', 'message', 'date']).sort({
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
      createdName = name,
      createdMessage = message,
      createdDate = date,
    } = await Comments.create({
      name,
      message,
      date,
    })
    res
      .status(201)
      .json({ name: createdName, message: createdMessage, date: createdDate })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getComments,
  addComment,
}
