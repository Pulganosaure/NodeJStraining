const express = require('express')
const mysql = require('mysql')
const db = require('../../mysql/db')

const router = express.Router()

// @route  GET api/profils
// @desc   Login User / Returning JWT Token
// @access Public
router.get('/users_list', (req, res) => {

  var results = []
  //inialitation de la connexion
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
   db.get().query('SELECT * FROM users_list', function(err, lines) {
        if (err) throw err
        //pour chaque donnée on la push dans le tableau
        lines.map(line => {
          var entry = {
            username: line.username,
            combat_rank: line.combat_rank,
            trader_rank: line.trader_rank,
            explorer_rank: line.explorer_rank,
            }
          results.push(entry)
        })
        res.json(results)
      })
  })
})

module.exports = router
