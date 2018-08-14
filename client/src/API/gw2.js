const accessToken = '4F5E7E01-871B-BB4E-ACB7-42B2B05035C5DFC8B1F5-CD38-44A8-AEA1-A7AE46A2B03C'

const gw2 = {
  async getData() {
    try {
      let response = await fetch(`https://api.guildwars2.com/v2/characters?access_token=${accessToken}`, {
        method: 'GET',
      })
      if (response.ok) {
        let jsonResponse = await response.json();''
        return jsonResponse
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }
}

export default gw2
