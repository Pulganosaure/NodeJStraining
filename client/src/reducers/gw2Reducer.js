import { FETCH_GW2_CHARACTERS, LOADING_DATA } from '../actions/types'
const initialState = {
  characters: [],
  loading: false,
}

export default function authReducer (state = initialState, action) {
  switch(action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      }
    case FETCH_GW2_CHARACTERS:
    return {
      ...state,
      characters: action.payload,
      loading: false,
    }

    default :
      return state
  }
}
