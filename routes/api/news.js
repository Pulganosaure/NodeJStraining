const express = require('express')
const mysql = require('mysql')
const db = require('../../mysql/db')
const router = express.Router()


function get_AuthorName_ById(user_id)
{
  let res = ""
  db.connect(db.MODE_PRODUCTION, function() {
    db.get().query('SELECT username FROM users_list WHERE id LIKE '+ user_id, function(err, result) {
      if(result[0].username)
        res = result[0].username
    })
  })
  return res
}

// @route  GET api/news
// @desc   return the 20 latest news
// @access Public
router.get('/', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
    let result = []
    db.get().query('SELECT * FROM `news` LIMIT 20', function(err, news) {
      if(news !== "")
      news.map(news => {
        result.push({
          title: news.title,
          text: news.text,
          publishDate: news.publishDate,
          author: get_AuthorName_ById(news.author_id),
        })

      })
      res.json(result)
    })
  })
})
// @route  Post api/news/insert
// @desc   post news
// @access Private
router.post('/insert', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
    //requete mysql
    db.get().query('INSERT into `news` (title, text, author_id) values("'+ req.body.title+'", "'+ req.body.text+'", "'+ req.body.author_id+'")', function(err, result) {
      res.json(result)
    })
  })
})


module.exports = router
