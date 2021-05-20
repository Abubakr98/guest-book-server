const guestValidator = require('../helpers/validation/guestForm')

module.exports = (req, res, next) => {
  const errors = guestValidator(req.body)
  if (errors.length) {
    res.status(422).json({ message: `Validation failed: ${errors.join(', ')}` })
    return
  }
  next()
}
