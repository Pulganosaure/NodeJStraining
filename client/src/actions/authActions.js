import axios from 'axios'
import { LOADING_DATA, FETCH_GW2_CHARACTERS } from './types'

export const getGw2Characters = () => async dispatch => {
  dispatch(loading())
  const accessToken = '4F5E7E01-871B-BB4E-ACB7-42B2B05035C5DFC8B1F5-CD38-44A8-AEA1-A7AE46A2B03C'
  const res = await axios.get(`https://api.guildwars2.com/v2/characters?access_token=${accessToken}`)

  dispatch({
    type: FETCH_GW2_CHARACTERS,
    payload: res.data,
  })
}

export const loading = () => {
  return {
    type: LOADING_DATA,
  }
}
