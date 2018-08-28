import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import BGSData from './../BGSMonitoring/bgsmonitoring.js'
import ConnexionForms from './../Sessions/Connexion.js'
import InscriptionForms from './../Sessions/Inscription.js'
import ExpendTo from '../BGSMonitoring/expansionto.js'
import ProfileHome from '../profils/home.js'
import EventHome from '../events/home.js'
import PhotoGaleryHome from '../photogalery/home.js'


class RoutesList extends Component {

  render() {
    return (
      <Fragment>
        <Fragment>
          <Route
            exact path='/BGSMonitoring'
            component={BGSData}
          />
          <Route
            exact path='/Home'
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
            exact path='/inscription'
            component={InscriptionForms}
          />
          <Route
            exact path='/connexion'
            component={ConnexionForms}
          />

        </Fragment>
      </Fragment>
    )
  }
}
export default RoutesList
