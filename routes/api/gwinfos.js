const express = require('express')
const axios = require('axios')
const router = express.Router()
// @route  GET api/gwinfos/classicons
// @desc   get user list
// @access Public
router.get('/classIcons/:name', (req, res) => {
  var results = ""
  const classicons = {
    Guardian: "https://render.guildwars2.com/file/6E0D0AC6E0CE5C0C29B3D736ABEA070F4A58540E/156633.png",
    Warrior: "https://render.guildwars2.com/file/0A76324239946B79C061762095FAB2BDF7A1D8D7/156642.png",
    Engineer: "https://render.guildwars2.com/file/A94D00911BD47CDE39A104F90C7D07DE623554ED/156631.png",
    Ranger: "https://render.guildwars2.com/file/FEF2479DC197D40758A8D6E95201F4A7996EB357/156639.png",
    Thief: "https://render.guildwars2.com/file/13A2C0EF23F23FF2084875629465279DDA807E3D/103581.png",
    Elementalist: "https://render.guildwars2.com/file/BBED46EB20C80D0DDE0F99402493C7E6FFAE1530/156629.png",
    Mesmer: "https://render.guildwars2.com/file/AF61567E16A83F145D6FB35D63BF01074A3A5AB9/156635.png",
    Necromancer: "https://render.guildwars2.com/file/CA5A4E96080FCF057C9DA0ED35C693477580421C/156637.png",
    Revenant: "https://render.guildwars2.com/file/696A48DD61EE01FD1F4FBBBDB82D74611E04EA39/965717.png",
  }
  console.log(req.params.name)
  switch (req.params.name) {
    case "Guardian":
      results = classicons.Guardian
      break
    case "Warrior":
      results =  classicons.Warrior
      break
    case "Engineer":
      results =  classicons.Engineer
      break
    case "Ranger":
      results =  classicons.Ranger
    break
    case "Thief":
      results =  classicons.Thief
      break
    case "Elementalist":
     results =  classicons.Elementalist
     break
    case "Mesmer":
      results =  classicons.Mesmer
      break
    case "Necromancer":
      results =  classicons.Necromancer
      break
    case "Revenant":
      results =  classicons.Revenant
    break
    default:
      results =  "error, class not found."

  }
  res.json({classIcon: results})
})
  router.get('/characters/details/:name/:apiKey', async (req, res) => {
    //if(req.params.name === "" || req.params.apiKey)
    console.log(req.params)
    const data = await axios.get(`https://api.guildwars2.com/v2/characters/${req.params.name}/core?access_token=${req.params.apiKey}`)
    .catch(err => res.status(400).json(err))
    res.status(200).json(data.data)
  })

router.get('/characters/:apiKey', async (req, res) => {
  const data = await axios.get(`https://api.guildwars2.com/v2/characters?access_token=${req.params.apiKey}`)
    .catch(err => res.status(400).json(err))
  res.status(200).json(data.data)

})

router.get('/title/:titleId', async (req, res) => {
  const data = await axios.get(`https://api.guildwars2.com/v2/titles?lang=fr&id=${req.params.titleId}`)
  .catch(err => res.status(400).json(err))
  console.log(data.data)
  res.status(200).json(data.data)
})


module.exports = router
