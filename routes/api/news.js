const express = require('express')
const News = require('../../models/News')


const passport = require('passport')

const router = express.Router()

 
// @route  GET api/news
// @desc   return the 20 latest news
// @access Public
router.get('/', async (req, res) => {
  const news = await News.findOne()
  if(news)
    res.status(200).json(news)
  else
    res.status(400).json({error: "no news found"})
})
// @route  Post api/news/insert
// @desc   post news
// @access Private
router.post('/insert', passport.authenticate('jwt', {session: false}), async (req, res) => {

  const news_entry = new News({
    userId: req.user.id,
    title: req.body.title,
    text: req.body.title
  })
  try {
    const news = await news_entry.save()
    res.json(news)
  } catch (err) {
    res.status(400).send(err)
  }
})


module.exports = router
