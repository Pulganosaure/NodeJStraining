const express = require('express');
const mongoose = require('mongoose')

//const users = require('./routes/api/users')



const app = express();
const port = process.env.PORT || 5000

const db = require('./config/keys').keys

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'galanews'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('mysql connected')
})

//app.use('./api/users', users)

app.get('/api/express', (req, res) => {
  res.json({ express: true });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
