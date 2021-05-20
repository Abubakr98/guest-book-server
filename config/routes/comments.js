const express = require('express')

const router = express.Router()
const comments = require('../../app/controllers/comments')
const validation = require('../../middleware/validation')

router
  .route('/')
  .get(comments.getComments)
  .post(validation, comments.addComment)

module.exports = router
