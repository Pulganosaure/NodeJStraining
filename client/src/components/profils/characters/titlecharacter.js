import React, {Fragment} from 'react'
import gw2 from '../../../API/gw2.js'


class TitleChar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }
  async componentDidMount() {
    const data = await gw2.getCurrentTitle(this.props.id)
    this.setState({
      name: data.name
    })
  }
  render() {
    return(
      <h6>{this.state.name}</h6>
    )}
  }
export default TitleChar
