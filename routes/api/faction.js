const express = require('express')
const passport = require('passport')
const mysql = require('mysql')




router.get('/factions/:faction', (req, res) => {
  const errors = {}
  Profile.findOne()
    .then(profile => {}
      res.json(profile)
    })
    .catch(err => res.status(404).json(err))
})
