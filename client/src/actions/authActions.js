import axios from 'axios'
import jwt_decode from 'jwt-decode'

import setAuthToken from '../utils/setAuthToken'
import { LOADING_DATA, CONNECT_USER } from './types'

export const connectuser = (userData) => async dispatch => {
  //let userData = {username: "pulgan", password: ""}
  const data = await axios.post('/api/users/login', userData)
  const res = { isAuthenticated: true,
                user: data.data
              }

  const { token } = res
  localStorage.setItem('jwtToken', token)
  // Set token to Auth header
  //setAuthToken(token)
  // Decode token to get user userData
  //const decoded = jwt_decode(token)
  dispatch({
    type: CONNECT_USER,
    payload: res,
  })
}


export const registUser = (userData) => async dispatch => {

  const data = await axios.post('/api/users/register', userData)
  const res = { isAuthenticated: true,
                user: data.data
              }
  console.log(res)
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
