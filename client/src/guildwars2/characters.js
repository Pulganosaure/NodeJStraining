import React from 'react'
import { connect } from 'react-redux'
import { getGw2Characters } from '../actions/authActions'

class Characters extends React.Component {
  componentDidMount() {
    this.props.getGw2Characters()
  }
  render() {
    const { characters } = this.props.gw2
    return (
      <div>
        {characters[0]}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gw2: state.gw2,
})

export default connect(mapStateToProps, { getGw2Characters })(Characters)
