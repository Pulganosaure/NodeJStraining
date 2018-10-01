const express = require('express')
const Archivement = require('../../models/Archivements')


const router = express.Router()

// @route  GET api/archivements
// @desc   get archivements list
// @access Public
router.get('/', async (req, res) => {
  const archivements = await Archivement.findOne()
  if(archivements)
    res.status(200).json(archivements)
  else {
    res.status(400).json({error: "no archivement found"})
  }
})

router.get('/:categoryid', async (req, res) => {
  const archivements = await Archivement.find({category: req.params.categoryid})
  if(archivements)
    res.status(200).json(archivements)
  else {
    res.status(400).json({error: "no archivement found"})
  }
})

module.exports = router
