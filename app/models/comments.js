const mongoose = require('mongoose')

const CommentsSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'user name',
    required: true,
  },
  message: {
    type: String,
    default: 'message text',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
})

mongoose.model('Comments', CommentsSchema)
