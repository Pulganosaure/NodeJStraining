const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')
const bodyParser = require('body-parser')

// ROUTES IMPORT
const users = require('./routes/api/users')
const profil = require('./routes/api/profil')
//const archivements = require('./routes/api/archivements')
//const gwinfos = require('./routes/api/gwinfos')
const pictures = require('./routes/api/pictures')
const picturecommentary = require('./routes/api/picturecommentary')
const news = require('./routes/api/news')

// STRATEGY
require('./services/passport')(passport)

// EXPRESS
const app = express()

// MONGODB config
const db = require('./config/keys').keys

// CONNECT to Mongodb
mongoose
  .connect(db.mongo.url(), db.mongo.options)
  .then(() => console.log('Mongodb Connected'))
  .catch(err => console.error(err))

// MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// PASSPORT
app.use(passport.initialize())

// ROUTES API
//app.use('/api/archivements', archivements)
app.use('/api/users', users)
//app.use('/api/gwinfos', gwinfos)
app.use('/api/pictures', pictures)
app.use('/api/picturecommetary', picturecommentary)
app.use('/api/news', news)
app.use('/api/profils', profil)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`));
