const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

// Create UserSchema
const PictureCommentarySchema = new Schema({
  userId: {
    type: String,
  },
  pictureId: {
    type: String,
  },
  text: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

PictureCommentarySchema.plugin(uniqueValidator)



module.exports = PictureCommentarySchema = mongoose.model('picturecommentary', PictureCommentarySchema)
