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

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)
  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email })
  .then(user => {
    if (user) {
      errors.email = 'Email already exists'
      return res.status(400).json(errors)
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg',  // Rating
        d: 'mm',  // Default
      })

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err))
        })
      })
    }
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

router.post('/connect', (req, res) => {


  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
    db.get().query('SELECT id FROM `users_list` WHERE password LIKE "'+ req.password + '"', function(err, lines) {
      db.query('SELECT INTO users_list id WHERE username LIKE "'+ req.username+'" AND password LIKE "'+ req.password+ '"')

    })
  })
})


module.exports = router
