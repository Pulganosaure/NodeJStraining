const express = require('express')
const mysql = require('mysql')
const db = require('../../mysql/db')

const router = express.Router()

// @route  GET api/pictures/
// @desc   return the number of picture stocked in the database
// @access Public
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
// @route  GET api/pictures/
// @desc   return 20 picture of the page
// @access Public
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
            owner: {id: picture.ownerid, name: getownername(picture.ownerid)},
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

//return the username from his id
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


router.post('/pictures/commentary/post', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
    db.get().query('INSERT INTO picturecommentarys ("user_id, message, pictureId") value("'+ req.body.id+'", "'+ req.body.message+'", "' + req.body.pictureId + '")')
  })
})

router.post('/pictures/commentary/delete', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
  })
})

router.post('/pictures/commentary/edit', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
  })
})

module.exports = router
