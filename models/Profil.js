const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

// Create UserSchema
const ProfilSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  Informations: {
    type: {
      gw2ApiKey: String,
      archivementPoints: Number,
    },
  },
  Permissions: {
    type: {
      event_manager: Boolean,
      event_creator: Boolean,
      user_manager: Boolean,
      ressources_manager: Boolean,
      ressources_creator: Boolean,
      event_manager: Boolean,
      event_creator: Boolean,
    },
  },
  Statistiques: {
    type: {
      eventCreated: Number,
      eventParticipated: Number,
      picturePosted: Number,
      messagePosted: Number,
      },
  },
})

ProfilSchema.plugin(uniqueValidator)



module.exports = Profil = mongoose.model('profil', ProfilSchema)
