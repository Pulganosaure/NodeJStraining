const express = require('express')
const Picture = require ('../../models/Picture')
const passport = require('passport')

const router = express.Router()

// @route  GET api/pictures/
// @desc   return the number of picture stocked in the database
// @access Public
router.get('/', passport.authenticate('jwt', {session: false}), async (req, res) => {
    //count total in the database
    const totalPicture = await Picture.count()
    //count
    res.status(200).json({total: totalPicture})
})
// @route  GET api/pictures/:page:
// @desc   return 20 picture of the page
// @access private
router.get('/:page', passport.authenticate('jwt', {session: false}), async (req, res) => {
  //check if :page is not a number
  if(!isNaN(req.params.page)) {
    //request to the database
    const Pictures = await Picture.find()
    //return the result, everything was fine
    res.status(200).json(Pictures)
  }
  else {
    //:page is not a number, return a error
    res.status(400).json({error: "invalid page number"})
  }
})

module.exports = router
