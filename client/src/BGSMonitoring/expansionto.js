import React from 'react'
import * as EDSMAPI from './../API/EDSM.js'
import ExpendCardResult from './expansionCardResult.js'

class ExpendTo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      systemList: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.getSystemList = this.getSystemList.bind(this)
    this.filterSystem = this.filterSystem.bind(this)
  }

  handleChange(e) {
    this.setState({ query: e.target.value })
  }

  async getSystemList() {
    const data =  await EDSMAPI.systemAroundTarget(this.state.query)
    this.setState({
      systemList: data.sort((a, b) => a.distance - b.distance),
    })
  }

  filterSystem() {
    const value = 0
    const systemListSort = this.state.systemList.map(system => <h2>{system.distance}</h2>)
    return systemListSort.slice(1, (systemListSort.length -1))
  }

  render() {
    const {query, systemList} = this.state
    return(
      <div>
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
              onClick={this.getSystemList}>
              SEND
            </button>
          </div>
        </div>
        <div>{this.filterSystem()}</div>
      </div>
    )
  }
}
export default ExpendTo
