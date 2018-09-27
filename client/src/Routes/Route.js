import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import BGSData from '../components/BGSMonitoring/bgsmonitoring.js'
import Login from '../components/auth/login.js'
import Register from '../components/auth/register.js'
import ExpendTo from '../components/BGSMonitoring/expansionto.js'
import ProfileHome from '../components/profils/home.js'
import EventHome from '../components/events/home.js'
import PhotoGaleryHome from '../components/photogalery/home.js'
import MainPage from '../components/homepage/home.js'
import RessourcesHome from '../components/ressources/home.js'

class RoutesList extends Component {

  render() {
    return (
        <Fragment>
          <Route
            exact path='/'
            component={MainPage}
          />
          <Route
            exact path='/BGSMonitoring'
            component={BGSData}
          />
          <Route
            exact path='/Home'
          />
          <Route
            exact path='/ressources'
            component={RessourcesHome}
          />
          <Route
            exact path='/expandto'
            component={ExpendTo}
          />
          <Route
            exact path='/Profil'
            component={ProfileHome}
          />
          <Route
            exact path='/Events'
            component={EventHome}
          />
          <Route
            exact path='/gallery'
            component={PhotoGaleryHome}
          />
          <Route
            exact path='/gallery/:id'
            component={PhotoGaleryHome}
          />
          <Route
            exact path='/Register'
            component={Register}
          />
          <Route
            exact path='/Login'
            component={Login}
          />
        </Fragment>
    )
  }
}
export default RoutesList
