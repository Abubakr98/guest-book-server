module.exports = (body) => {
  const { name, message, date } = body

  let regex = /^[a-zA-Z0-9 _]*$/
  let errors = []

  if (!name?.trim()) errors.push('field "name" must be provided and cannot be empty')
  if (!message?.trim()) errors.push('field "message" must be provided and cannot be empty')
  if (!date?.trim()) errors.push('field "date" must be provided and cannot be empty')

  if (!name.match(regex))
    errors.push('use only letters, numbers and underscores for "name" field!')

  return errors
}
