const accessToken = '4F5E7E01-871B-BB4E-ACB7-42B2B05035C5DFC8B1F5-CD38-44A8-AEA1-A7AE46A2B03C'

const gw2 = {
  async getCharacterList(api) {
    try {
      let response = await fetch(`https://api.guildwars2.com/v2/characters?access_token=${api}`, {
        method: 'GET',
      })
      if (response.ok) {
        let jsonResponse = await response.json()
        return jsonResponse
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  },

  async getCharacterDetails(name) {
    try {
      let response = await fetch(`https://api.guildwars2.com/v2/characters/${name}/core?access_token=${accessToken}`, {
        method: 'GET',
      })
      if (response.ok) {
        let jsonResponse = await response.json()
        return jsonResponse
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  },

  async getCurrentTitle(titleid) {
    try {
      let response = await fetch(`https://api.guildwars2.com/v2/titles?lang=fr&id=${titleid}`, {
        method: 'GET',
      })
      if (response.ok) {
        let jsonResponse = await response.json()
        return jsonResponse
      }
      throw new Error('Request failed!')
    } catch (error) {
      return(error)
    }
  },

  async getRaidBossDown(apiKey) {
    try {
      let response = await fetch(`https://api.guildwars2.com/v2/account/raids?access_token=${apiKey}`, {
        method: 'GET',
      })
      if (response.ok) {
        let jsonResponse = await response.json()
        return jsonResponse
      }
      throw new Error('Request failed!')
    } catch (error) {
      console.log(error)
    }
  },
}

export default gw2
