const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

// Create UserSchema
const ArchivementSchema = new Schema({
  category: {
    type: Number,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  value: {
    type: Number,
  },
})

ArchivementSchema.plugin(uniqueValidator)

module.exports = Archivement = mongoose.model('archivements', ArchivementSchema)
