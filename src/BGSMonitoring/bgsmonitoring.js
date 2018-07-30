import React from 'react'
import * as EDSMAPI from './../API/EDSM.js'
import Collapse from './collapse.js'
//import InfGraph from './InfluenceGraphic.js'
import StationsDetails from './StationsDetails.js'

class BGSData extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query: '',
      factions: [],
      cFaction: {},
      systemName: '',
      stationsDetails: [],
      displaybutton: false

    }

    this.handleChange = this.handleChange.bind(this)
    this.diplaySystem = this.diplaySystem.bind(this)
    this.get_System_Details = this.get_System_Details.bind(this)
  }

  handleChange(e) {
    this.setState({ query: e.target.value })
  }

  async diplaySystem() {
    const data =  await EDSMAPI.factionsData(this.state.query)
    this.setState({
      factions: data.factions,
      cFaction: data.controllingFaction.name,
      systemName: data.name,
      displaybutton: true,
    })
  }

  async get_System_Details() {
    const data =  await EDSMAPI.systemDetails(this.state.systemName)
    this.setState({
      stationsDetails: data.stations,
      displaybutton: false,
    })
  }


  render() {
    const { factions, query, cFaction } = this.state
    return (
      <div>
          <div className="form-group mt-3">
            <div className="row">
              <div className="col pr-0">
                <input name="system_name" className="form-control" placeholder="SOL"
                  type="text"
                  value={query}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col pl-0">
                <button type="submit" className="btn"
                  onClick={this.diplaySystem}>
                  SEND
                </button>
              </div>
            </div>
          </div>
          <div id="graphic">
            {/* <InfGraph systemName={query} data={factions}/> */}
          </div>
          <div id="factionData">
            {factions.map(faction =>
              <Collapse ownerName={cFaction} fData={faction}/>
            )}
          </div>
          <div>
            {this.state.displaybutton ?
            <button type="submit" className="btn"
               onClick={this.get_System_Details}>
              SHOW DETAILS
            </button>
            : null
          }
          </div>
          <div className="row justify-content-around mt-5 mb-5">
            {this.state.stationsDetails.map(station =>
              <StationsDetails data={station}/>
            )}
          </div>
      </div>
    )
  }
}

export default BGSData