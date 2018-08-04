const API = 'https://api.guildwars2.com/v2/characters'
const token = 'Bearer <API KEY>'

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


export const getCharactersList = () =>
fetch(`${API}`,  { headers })
.then(res => res.json())
.then(data => data)
