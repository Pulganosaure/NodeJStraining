const express = require('express')
const passport = require('passport')
const mysql = require('mysql')




router.post('/pictures/commentary/post', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
    db.get().query('INSERT INTO picturecommentarys ("user_id, message, pictureId") value("'+ req.body.id+'", "'+ req.body.message+'", "' + req.body.pictureId + '")')
  })
})

router.post('/pictures/commentary/delete', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
  })
})

router.post('/pictures/commentary/edit', (req, res) => {
  db.connect(db.MODE_PRODUCTION, function() {
  })
})


router.get('/pictures/commentary/get')
