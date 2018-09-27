const express = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const Profil = require('../../models/Profil')
const keys = require('../../config/keys').keys

const router = express.Router()


// @route  POST api/profils/
// @desc   get user Profil
// @access Private
router.get('/', passport.authenticate('jwt', {session: false}), async (req, res) => {
  const profildata = await Profil.findOne({id: req.body.id})
  if(!profildata) {
    res.status(403).json('profil not found')
  }
  else {
    const payload = {
      Informations: profil.Informations,
      Permissions: profil.archivementPoints,
      Statistiques: profil.Statistiques,
    }
    res.status(200).json(payload)
  }
})

router.get('/create', passport.authenticate('jwt', {session: false}), async (req, res) => {
  const profildata = await Profil.findOne({id: req.body.id})
  try {
    const user = await newUser.save()
    res.json(user)
  } catch (err) {
    res.status(400).send(err)
  }
  const payload = {
    Informations: profil.Informations,
    Permissions: profil.archivementPoints,
    Statistiques: profil.Statistiques,
    }
  res.status(200).json(payload)
})




module.exports = router
