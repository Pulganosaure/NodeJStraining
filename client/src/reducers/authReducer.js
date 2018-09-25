import {LOADING_DATA, CONNECT_USER } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {},
  stats: {},
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
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
      stats: action.payload.stats,
    }
    default :
      return state
  }
}
