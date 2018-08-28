const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
//BDD MYSQL
const mysql = require('mysql')
const db = require('./mysql/db')
//API
const profils = require('./routes/api/profils')
const users = require('./routes/api/users')
const archivements = require('./routes/api/archivements')
const gwinfos = require('./routes/api/gwinfos')
const pictures = require('./routes/api/pictures')

const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

app.use('/api/profils', profils)
app.use('/api/archivements', archivements)
app.use('/api/users', users)
app.use('/api/gwinfos', gwinfos)
app.use('/api/pictures', pictures)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`));
