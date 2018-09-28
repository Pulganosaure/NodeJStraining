const express = require('express')
const Picture = require ('../../models/Picture')
const passport = require('passport')

const router = express.Router()

// @route  GET api/picturecommetary/
// @desc   return the number of picture stocked in the database
// @access Public
router.get('/:pictureid', passport.authenticate('jwt', {session: false}), async (req, res) => {
  const PicturesCommentarys = await Picture.findOne()

  if(PicturesCommentarys)
    res.status(200).json(PicturesCommentarys)
  else {
    res.status(400).json({error: "invalid pictue id"})
  }
})

module.exports = router
