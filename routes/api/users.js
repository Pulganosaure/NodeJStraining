const express = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const bcrypt = require('bcrypt')

const User = require('../../models/User')
const keys = require('../../config/keys').keys

const router = express.Router()


// @route  POST api/users/register
// @desc   Register new user route
// @access Public
router.post('/register', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (user) {
    res.status(403).json('user already exist')
  } else {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    try {
      const user = await newUser.save()
      res.json(user)
    } catch (err) {
      res.status(400).send(err)
    }
  }
})

// @route  POST api/users/register
// @desc   Login as user and generate token
// @access Public
router.post('/login', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const user = await User.findOne({ email })
  const match = await bcrypt.compareSync(password, user.passwordHash)

  if (!user) {
    res.status(400).json('User not found')
  }
  if (match) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email
    }
    jwt.sign(
      payload,
      keys.jwt.secret,
      { expiresIn: 7000 },
      (err, token) => {
        res.json({
          success: true,
          token: 'Bearer ' + token
        })
      })
  } else {
    return res.status(400).json('Password incorrect')
  }

})

router.get('/test', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json('Je suis authentifié')
})

module.exports = router
