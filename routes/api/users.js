const express = require('express')
const mysql = require('mysql')
const db = require('../../mysql/db')

const router = express.Router()
// @route  GET api/profils
// @desc   get user list
// @access Public
router.get('/', (req, res) => {
  var results = []
  //inialitation de la connexion
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
    db.get().query('SELECT COUNT(*) AS userscount FROM `users_list` ', function(err, lines) {
      if (err) throw err
      //pour chaque donnée on la push dans le tableau
      console.log(lines[0].userscount)
      if(lines[0].userscount > 0)
      return res.status(400).json("user already exist")
      else {
        db.get().query("INSERT into `users_list` (username, password) values("+ req.username+", "+ req.password + ")")
      }
    })
  })
})

router.post('/passedit', (req, res) => {


  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
    var id = db.get().query('SELECT id FROM `users_list` WHERE password LIKE "'+ req.password + '"', function(err, lines) {
      db.query('INSERT INTO users_list (password) VALUES (password) WHERE id LIKE "'+id+'"')
    })
  })
})

router.get('/login', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
    db.get().query('SELECT * FROM users_list WHERE username LIKE "'+ "pulga n"+'" LIMIT 1', function(err, result) {
      (result === "") ?
      res = {
        id: result[0].id,
        name: result[0].username,
        gwAPIKey: result[0].apiKey,
        permissions: result[0].permissions,
      }
      : null
    })
  })
})


module.exports = router
