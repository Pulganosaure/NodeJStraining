import React from 'react'
import * as EDSMAPI from './../EDSMAPI/system'
import Collapse from './collapse.js'

class BGSData extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query: '',
      factions: [],
      cFaction: {},

    }

    this.handleChange = this.handleChange.bind(this)
    this.diplaySystem = this.diplaySystem.bind(this)
  }

  handleChange(e) {
    this.setState({ query: e.target.value })
  }

  async diplaySystem() {
    const data =  await EDSMAPI.systemData(this.state.query)
    this.setState({
      factions: data.factions,
      cFaction: data.controllingFaction.name,
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

        <h1>{cFaction.name}</h1>
        {factions.map(faction =>
          <Collapse ownerName={cFaction} fData={faction}/>
        )}
      </div>
    )
  }
}

export default BGSData
