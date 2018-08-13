const express = require('express');
const bodyParser = require('body-parser')

const cors = require('cors');
const mysql = require('mysql')
const profils = require('./routes/api/profils')
const archivements = require('./routes/api/archivements')
const app = express();
var db = require('./mysql/db')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(cors());
const router = express.Router()

app.use('/api/profils', profils)
app.use('/api/archivements', archivements)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`));
