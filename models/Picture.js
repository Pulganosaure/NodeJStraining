const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

// Create UserSchema
const PictureSchema = new Schema({
  userId: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  eventId: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

PictureSchema.plugin(uniqueValidator)



module.exports = Picture = mongoose.model('pictures', PictureSchema)
