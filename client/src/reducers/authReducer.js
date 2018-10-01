import {LOADING_DATA, CONNECT_USER, DISCONNECT_USER } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {},
}

export default function authReducer (state = initialState, action) {
  switch(action.type) {
    case LOADING_DATA:
    return {
      ...state,
      loading: true,
    }
    case CONNECT_USER:
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload,
    }
    case DISCONNECT_USER:
    return initialState
    default :
      return state
  }
}
