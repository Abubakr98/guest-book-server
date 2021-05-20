const express = require('express')
const comments = require('./comments')

const router = express.Router()

router.use('/comments', comments)

router.use('*', (req, res) => {
  res.send('404 page not found')
})

module.exports = router
