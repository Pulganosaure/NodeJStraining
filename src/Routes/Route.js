import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import BGSData from './../BGSMonitoring/bgsmonitoring.js'

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
        </Fragment>
      </Fragment>
    )
  }
}
export default Routes_List
