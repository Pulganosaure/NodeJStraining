import { FETCH_PROFIL, CLEAR_CURRENT_PROFIL} from '../actions/types'
const initialState = {
  isCreated: false,
  Informations: {},
  Permissions: {},
  Statistiques: {},
}

export default function authReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_PROFIL:
    return {
      ...state,
      isCreated: true,
      Informations: action.payload.Informations,
      Permissions: action.payload.Permissions,
      Statistiques: action.payload.Statistiques,
    }
    case CLEAR_CURRENT_PROFIL:
    return initialState
    default :
    return state
  }
}
