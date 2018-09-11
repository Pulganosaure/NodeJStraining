import { combineReducers } from 'redux'

import authReducer from './authReducer'
import gw2Reducer from './gw2Reducer'

export default combineReducers({
  auth: authReducer,
  gw2: gw2Reducer,
})
