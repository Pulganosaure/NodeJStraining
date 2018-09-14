const express = require('express')
const mysql = require('mysql')
const db = require('../../mysql/db')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const router = express.Router()
// @route  GET api/profils
// @desc   get user list
// @access Public
router.post('/register', (req, res) => {
  var results = []
  //inialitation de la connexion
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
    db.get().query('SELECT COUNT(*) AS userscount FROM `users_list` WHERE username LIKE "' + req.body.username +'" OR email LIKE "'+ req.body.email+'"', function(err, lines) {
      if (err) throw err
      //pour chaque donnée on la push dans le tableau
      if(lines[0].userscount > 0)
      return res.status(400).json("username or email already used")
      else {
        db.get().query('INSERT into `users_list` (username, password, email) values("'+ req.body.username + '", "'+ req.body.password + '","' + req.body.email +'")')
        res.json("done")
      }
    })
  })
})

router.post('/login', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql  AND password LIKE "' + req.body.password + '"
    db.get().query('SELECT * FROM users_list WHERE username LIKE "'+ req.body.username +'" LIMIT 1', function(err, result) {
      if(result !== "")
      {
        const payload = {
          id: result[0].id,
          name: result[0].username,
          email: result[0].email,
          archivementPoints: result[0].archivementPoints,
          gwAPIKey: result[0].apiKey,
          permissions: result[0].permissions,
        }
        jwt.sign(
          payload,
          keys.secret,
          { expiresIn: 7000 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            })
          })

        }
      })
    })
  })


  module.exports = router
