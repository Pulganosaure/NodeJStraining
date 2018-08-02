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

  }

  handleChange(e) {
    this.setState({ query: e.target.value })
  }

  async getSystemList() {
    const data =  await EDSMAPI.systemAroundTarget(this.state.query)
    this.setState({
      systemList: data.sort((a, b) => (Object.keys(b.distance)) - (Object.keys(a.distance))),
    })
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
        <div>
          {
            this.state.systemList.map(system => <h2>{system.distance}</h2>)
          }

          }
        </div>
      </div>
    )
  }
}
export default ExpendTo
