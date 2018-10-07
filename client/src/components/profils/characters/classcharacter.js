import React from 'react'
import axios from 'axios'


class ClassChar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iconClassurl: "",
    }
  }
  async componentDidMount() {
    const classIcon = await axios.get(`api/gwinfos/classIcons/${this.props.className}`)
    this.setState({
      iconClassurl: classIcon.data.classIcon
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
