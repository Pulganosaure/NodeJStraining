const express = require('express')
const Archivement = require('../../models/Archivement')


const router = express.Router()

// @route  GET api/archivements
// @desc   get archivements list
// @access Public
router.get('/', (req, res) => {
  const archivements = await Archiveent.findOne()
  if(archivement)
    res.status(200).json(archivement)
  else {
    res.status(400).json({error: "no archivement found"})
  }
})

router.get('/:categoryid', (req, res) => {
  const archivements = await Archiveent.findOne({category: req.params.categoryid})
  if(archivement)
    res.status(200).json(archivement)
  else {
    res.status(400).json({error: "no archivement found"})
  }
})

module.exports = router
