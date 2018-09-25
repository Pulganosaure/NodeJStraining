const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

// Create UserSchema
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'email required'],
  },
  name: {
    type: String,
  },
  passwordHash: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

UserSchema.plugin(uniqueValidator)

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash)
}

UserSchema.virtual("password").set(function(value) {
  this.passwordHash = bcrypt.hashSync(value, 12)
})

module.exports = User = mongoose.model('users', UserSchema)
