import axios from 'axios'
import jwt_decode from 'jwt-decode'

import setAuthToken from '../utils/setAuthToken'
import { LOADING_DATA, CONNECT_USER } from './types'

export const connectuser = (userData) => async dispatch => {
  console.log(userData)
  axios.post('/api/users/login', userData)
  .then(res => {
    console.log(res)
    // Save to LocalStorage
    const { token } = res.data
    localStorage.setItem('jwtToken', token)
    // Set token to Auth header
    setAuthToken(token)
    // Decode token to get user userData
    const decoded = jwt_decode(token)
    //console.log(decoded)
    const value = {isAuthenticated: true, user: decoded}
    dispatch(setCurrentUser(value))
  })
  .catch( err => {
  }
  )
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
