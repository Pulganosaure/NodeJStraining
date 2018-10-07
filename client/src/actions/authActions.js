import axios from 'axios'
import jwt_decode from 'jwt-decode'

import setAuthToken from '../utils/setAuthToken'
import { CONNECT_USER, DISCONNECT_USER } from './types'

export const connectuser = (userData) => async dispatch => {
  try {
    const res = await axios.post('/api/users/login', userData)
    const { token } = res.data
    localStorage.setItem('jwtToken', token)
    setAuthToken(token)
    // Decode token to get user userData
    const decoded = jwt_decode(token)
    dispatch(setCurrentUser(decoded))
  } catch (err) {
    console.log("error: " + err)
  }
}


export const registUser = (userData) => async dispatch => {
  await axios.post('/api/users/register', userData).then()
}

// Log user out
export const logoutUser = () => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to {} which will set isAuthenticated to false
  return {
    type: DISCONNECT_USER,
    payload: null,
  }
}

export const setCurrentUser = decoded => {
  console.log(decoded)
  return {
    type: CONNECT_USER,
    payload: decoded,
  }
}
