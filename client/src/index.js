import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'

import rooReducer from './reducers'
import middleware from './middleware'

import setAuthToken from './utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { setCurrentUser, logoutUser } from './actions/authActions'
import { clearCurrentProfile, getProfil } from './actions/profilActions'


const store = createStore(rooReducer, composeWithDevTools(middleware))

if (localStorage.jwtToken) {
  const localToken = localStorage.jwtToken
  setAuthToken(localToken)
  const decoded = jwt_decode(localToken)
  store.dispatch(setCurrentUser(decoded))
  store.dispatch(getProfil())

  // Automatic logout
  const currentTime = Date.now()/1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    store.dispatch(clearCurrentProfile())
    window.location.href = '/login'
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
