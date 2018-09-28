const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

// Create UserSchema
const NewsSchema = new Schema({

  userId: {
    type: String,
  },
  title: {
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

NewsSchema.plugin(uniqueValidator)



module.exports = News = mongoose.model('news', NewsSchema)
