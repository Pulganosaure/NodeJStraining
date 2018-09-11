import React from 'react'
import * as EDSMAPI from './../API/EDSM.js'
import ExpansionCardResult from './expansionCardResult.js'

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
      systemList: data.sort((a, b) => a.distance - b.distance).slice(1, (data.length -1))
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
          {/* nombre de systèmes a checker */}
          {<h1>{systemList.length + " to check"}</h1>}

          {/* pour tout les systèmes on appel le component qui ira voir si il y a une place pour une expansion */}
          {systemList.map(system => {
            return <ExpansionCardResult system={system}/>
        })
      }</div>
      </div>
    )
  }
}
export default ExpendTo
