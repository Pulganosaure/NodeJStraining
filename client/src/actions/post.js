import axios from 'axios'
import jwt_decode from 'jwt-decode'

import setAuthToken from '../utils/setAuthToken'
import { LOADING_DATA, CONNECT_USER } from './types'

export const postPictureCommentary = (userData) => async dispatch => {
  axios.post('/api/users/login', userData)
  .then(res => {
    // Save to LocalStorage
    const { token } = res.data
    localStorage.setItem('jwtToken', token)
    // Set token to Auth header
    setAuthToken(token)
    // Decode token to get user userData
    const decoded = jwt_decode(token)
    console.log(decoded)
    const value = {isAuthenticated: true, user: decoded.profil, stats: decoded.stats}
    dispatch(setCurrentUser(value))
  })
  .catch( err => {}
  )
}


export const registUser = (userData) => async dispatch => {

  const data = await axios.post('/api/users/register', userData)
  const res = { isAuthenticated: true,
                user: data.data
              }
  dispatch({
    type: CONNECT_USER,
    payload: res,
  })
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
