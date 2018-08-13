const express = require('express')
const mysql = require('mysql')
const db = require('../../mysql/db')

const router = express.Router()

// @route  GET api/profils
// @desc   get user list
// @access Public
router.get('/users_list', (req, res) => {
  var results = []
  //inialitation de la connexion
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
   db.get().query('SELECT username FROM users_list', function(err, lines) {
        if (err) throw err
        //pour chaque donnée on la push dans le tableau
        lines.map(line => {
          results.push(line.username)
        })
        res.json(results)
      })
  })
})

// @route  GET api/profils
// @desc   get user profile
// @access Public
router.get('/user', (req, res) => {
  var results = []
  //inialitation de la connexion
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
   db.get().query('SELECT username, permissions FROM users_list WHERE username LIKE "' + req.query['id'] +'"', function(err, lines) {
        if (err) throw err
        //pour chaque donnée on la push dans le tableau
        lines.map(line => {
          var entry = {
            username: line.username,
            pemissions: line.permissions,
            }
          results.push(entry)
        })
        res.json(results)
      })
  })
})

module.exports = router
