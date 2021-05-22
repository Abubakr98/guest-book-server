const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  appPort: process.env.PORT || 8080,
  mongoUri: process.env.DB_URI,
}
