const API = 'https://api.guildwars2.com/v2/characters'
const token = 'Bearer 4F5E7E01-871B-BB4E-ACB7-42B2B05035C5DFC8B1F5-CD38-44A8-AEA1-A7AE46A2B03C'


export const getCharactersList = () =>
  fetch(API, {
    method: 'get',
    //"mode" : "no-cors",
    headers: {
      'Accept': 'application/json',
      'Authorization': token,
      "Access-Control-Allow-Origin":"*",
    },
  }).then(res => res.json())
  .then(data => data)
