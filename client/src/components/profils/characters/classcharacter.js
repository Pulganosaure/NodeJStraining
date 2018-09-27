import React, {Fragment} from 'react'
import gw2 from '../../../API/gw2.js'
import * as gw2infos from '../../../API/gw2infos.js'


class ClassChar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iconClassurl: "",
    }
  }
  async componentDidMount() {
    const classIcon = await gw2infos.getCLassIcon(this.props.className)
    this.setState({
      iconClassurl: classIcon.classIcon
    })
  }
  render() {
    return(
      <div className="col text-center">
        <h5 className="mb-0">{this.props.className}</h5>
        <img className="text-center" src={this.state.iconClassurl} alt="error class not found"></img>
      </div>
    )}
  }
export default ClassChar
