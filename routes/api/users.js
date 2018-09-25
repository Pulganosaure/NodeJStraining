const express = require('express')
const mysql = require('mysql')
const db = require('../../mysql/db')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const router = express.Router()
const key = "ABBABBAAABBBRERELF2323"
// @route  GET api/profils
// @desc   get user list
// @access Public
router.post('/register', (req, res) => {
  var results = []
  //inialitation de la connexion
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
    console.log(req.body)
    db.get().query('SELECT COUNT(*) AS userscount FROM `users_list` WHERE email LIKE "'+ req.body.email+'"', function(err, lines) {
      if (err) throw err
      //pour chaque donnée on la push dans le tableau
      if(lines[0].userscount > 0)
      return res.status(400).json({error:"email already used"})
      else {
        db.get().query('SELECT COUNT(*) AS userscount FROM `users_list` WHERE username LIKE "' + req.body.username +'"', function(err, lines) {
          if (err) throw err
          if(lines[0].userscount > 0)
            return res.status(400).json({error:"username already used"})
          else {
        db.get().query('INSERT into `users_list` (username, password, email) values("'+ req.body.username + '", "'+ req.body.password + '","' + req.body.email +'")')
        res.status(200).json("done")
        }
      })
      }
    })
  })
})

router.post('/login', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql  AND password LIKE "' + req.body.password + '"
    db.get().query('SELECT * FROM users_list WHERE username LIKE "'+ req.body.username +'" LIMIT 1', function(err, result) {
      console.log(result)
      if(result !== "")
      {
        const payload = {
          profil: {
            id: result[0].id,
            name: result[0].username,
            email: result[0].email,
            archivementPoints: result[0].archivementPoints,
            gwAPIKey: result[0].apiKey,
            permissions: result[0].permissions,
          },
          stats: {
            picturesPosted: result[0].picturesPosted,
            messagesPosted: result[0].messagesPosted,
            eventParticipation: result[0].eventParticipation,
            sondageCreated: result[0].sondageCreated,
            eventCreated: result[0].eventCreated,
          },
        }
        jwt.sign(
          payload,
          key,
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
