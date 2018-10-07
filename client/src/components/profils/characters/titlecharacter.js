import React from 'react'
import axios from 'axios'


class TitleChar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }
  async componentDidMount() {
    const data = await axios.get(`api/gwinfos/title/${this.props.id}`)

    this.setState({
      name: data.data.name
    })
  }
  render() {
    return(
      <h6>{this.state.name}</h6>
    )}
  }
export default TitleChar
