const express = require('express')
const mysql = require('mysql')
const db = require('../../mysql/db')

const router = express.Router()

// @route  GET api/archivements
// @desc   get archivements list
// @access Public
router.get('/', (req, res) => {
  var results = []
  //inialitation de la connexion
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
   db.get().query('SELECT * FROM archivementslist', function(err, lines) {
        if (err) throw err
        //pour chaque donnée on la push dans le tableau
        lines.map(line => {
          archivement = {
            id: line.id,
            category: line.category,
            title: line.title,
            description: line.description,
            value: line.value
          }
          results.push(archivement)
        })
        res.json(results)
      })
  })
})

router.get('/:categoryid', (req, res) => {
  var results = []
  //inialitation de la connexion
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
   db.get().query('SELECT * FROM archivementslist WHERE category LIKE "' + req.params.categoryid +'"', function(err, lines) {
        if (err) throw err
        //pour chaque donnée on la push dans le tableau
        lines.map(line => {
          archivement = {
            id: line.id,
            category: line.category,
            title: line.title,
            description: line.description,
            value: line.value
          }
          results.push(archivement)
        })
        res.json(results)
      })
  })
})

module.exports = router
