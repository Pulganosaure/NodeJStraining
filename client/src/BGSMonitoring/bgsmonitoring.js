import React from 'react'
import * as EDSMAPI from './../API/EDSM.js'
import Collapse_BGS from './collapse.js'
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
    this.no_result = this.no_result.bind(this)
    this.system_isempty = this.system_isempty.bind(this)
  }

  handleChange(e) {
    this.setState({ query: e.target.value })
  }

  async diplaySystem() {
    const data =  await EDSMAPI.factionsData(this.state.query)
    this.setState({
      factions: data.factions,
      systemName: data.name,
      displaybutton: true,
    })
    if((typeof data.controllingFaction) !== "undefined")
    this.setState({cFaction: data.controllingFaction.name})
  }
  async get_System_Details() {
    if(this.state.query === '')
    {
      return null
    }
    const data =  await EDSMAPI.systemDetails(this.state.systemName)
    this.setState({
      stationsDetails: data.stations,
      displaybutton: false,
    })
  }

no_result()
{
  this.setState({
    displaybutton: false
  })
  return <h2> Aucun résultat</h2>
}

system_isempty()
{
  this.setState({
    displaybutton: false
  })
    return <h2>Ce système est vide</h2>
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
          {
            (factions !== null && this.state.systemName !== '')
            ? (factions !== '')
              ? factions.map(faction => {
                  if(faction.influence !== 0)
                    return <Collapse_BGS ownerName={cFaction} fData={faction}/>})
              : this.system_isempty()
            : (this.state.systemName === '')
              ? null
              : this.no_result()

            }
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
