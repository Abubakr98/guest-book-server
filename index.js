/* eslint-disable no-console */
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

require('./app/models')

const config = require('./config')

const app = express()
app.use('/', express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use('/', config.router)
app.use(express.urlencoded({ extended: false }))

const { mongoUri, appPort } = config.app
mongoose
  .connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(appPort, () => {
      console.log(`server is running on port ...${appPort}...`)
    })
  })
  .catch((err) =>
    console.error(`Error connection to mongodb: ${mongoUri}`, err)
  )

module.exports = app
