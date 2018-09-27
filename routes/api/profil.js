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
  const profildata = await Profil.findOne({userId: req.user.id})
  console.log(profildata)
  if(!profildata) {
    res.status(403).json('profil not found')
  }
  else {
    const payload = {
      Informations: profildata.Informations,
      Permissions: profildata.Permissions,
      Statistiques: profildata.Statistiques,
    }
    res.status(200).json(payload)
  }
})

module.exports = router
