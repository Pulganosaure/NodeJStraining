const express = require('express')
const mysql = require('mysql')
const db = require('../../mysql/db')

const router = express.Router()

// @route  GET api/pictures/
// @desc   return the number of picture stocked in the database
// @access Private
router.get('/', (req, res) => {
  var results = []
  //inialitation de la connexion
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
   db.get().query('SELECT COUNT(*) AS total FROM `pictures`', function(err, result) {
     res.json({"total": result[0].total})
      })
  })
})

router.get('/:page', (req, res) => {
  var results = []
  //inialitation de la connexion
  if(!isNaN(req.params.page))
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
    console.log('SELECT * FROM `pictures` WHERE id >= ' + ((req.params.page - 1) * 20) + ' LIMIT 20')
   db.get().query('SELECT * FROM `pictures` WHERE id >= ' + ((req.params.page - 1) * 20) + ' LIMIT 20', function(err, pictures) {
        if (err) throw err
        //pour chaque donnée on la push dans le tableau
        pictures.map(picture => {
          archivement = {
            id: picture.id,
            title: picture.title,
            description: picture.description,
            event: picture.eventid,
            description: picture.description,
            owner: {id: picture.ownerid, name: "getownername(picture.ownerid)"},
            url: picture.url,
            date: picture.insertdate,
          }
          results.push(archivement)
        })
        res.json(results)
      })

  })
  else {
    res.json({error: "invalid page number"})
  }
})


function getownername(id)
{
  let name = ""
    db.connect(db.MODE_PRODUCTION, function(name){
      db.get().query('SELECT username FROM users_list WHERE id LIKE '+ id, function(err, result, name) {
        name = result[0].username
      })
    })
  return name
}

module.exports = router
