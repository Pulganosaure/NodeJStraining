const express = require('express');
const mysql = require('mysql')
const profils = require('./routes/api/profils')
const app = express();
var db = require('./mysql/db')

const router = express.Router()

app.use('/api/profils', profils)


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`));
