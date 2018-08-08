const API = 'https://api.guildwars2.com/v2/characters'
const token = 'Bearer <APIKEY>'


export const getCharactersList = () =>
  fetch(API, {
    method: 'get',
    "mode" : "no-cors",
    headers: {
      'Accept': 'application/json',
      'Authorization': token,
      "Access-Control-Allow-Origin":"*",
    },
  }).then(res => res.json())
  .then(data => data)
