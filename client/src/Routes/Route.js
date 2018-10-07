import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import BGSData from '../components/BGSMonitoring/bgsmonitoring.js'
import Login from '../components/auth/login.js'
import Logout from '../components/auth/logout.js'
import Register from '../components/auth/register.js'
import ProfileHome from '../components/profils/home.js'
import EventHome from '../components/events/home.js'
import PhotoGaleryHome from '../components/photogalery/home.js'
import MainPage from '../components/homepage/home.js'
import RessourcesHome from '../components/ressources/home.js'
import ToolsHome from '../components/tools/home.js'

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
            exact path='/tools'
            component={ToolsHome}
          />
          <Route
            exact path='/Register'
            component={Register}
          />
          <Route
            exact path='/Login'
            component={Login}
          />
          <Route
            exact path='/disconnect'
            component={Logout}
          />
        </Fragment>
    )
  }
}
export default RoutesList
