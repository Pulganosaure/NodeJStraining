import axios from 'axios'
import jwt_decode from 'jwt-decode'

import setAuthToken from '../utils/setAuthToken'
import { LOADING_DATA, CONNECT_USER } from './types'

export const connectuser = (userData) => async dispatch => {
  console.log(userData)
  try {
    const res = await axios.post('/api/users/login', userData)
    const { token } = res.data
    localStorage.setItem('jwtToken', token)
    setAuthToken(token)
    // Decode token to get user userData
    const decoded = jwt_decode(token)

    const profil = await axios.get('/api/profils/')
    console.log(JSON.stringify(profil))
    const value = {
      isAuthenticated: true,
      user: decoded,
      stats: profil.data
    }
    dispatch(setCurrentUser(value))
  } catch (err) {
    console.log("error: " + err)
  }
}


export const registUser = (userData) => async dispatch => {
  await axios.post('/api/users/register', userData).then()
}

export const loading = () => {
  return {
    type: LOADING_DATA,
  }
}

export const setCurrentUser = decoded => {
  return {
    type: CONNECT_USER,
    payload: decoded,
  }
}
