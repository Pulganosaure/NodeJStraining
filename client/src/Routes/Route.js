import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import BGSData from './../BGSMonitoring/bgsmonitoring.js'
import ConnexionForms from './../Sessions/Connexion.js'
import InscriptionForms from './../Sessions/Inscription.js'
import Test from '../wip/test.js'
import ExpendTo from '../BGSMonitoring/expansionto.js'


class Routes_List extends Component {

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
            exact path='/test'
            component={Test}
          />
          <Route
            exact path='/expandto'
            component={ExpendTo}
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
export default Routes_List
