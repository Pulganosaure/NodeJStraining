import { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import { clearCurrentProfile } from '../../actions/profilActions'

class Logout extends Component {

    componentDidMount() {
        this.props.history.push("/")
        this.props.logoutUser()
        this.props.clearCurrentProfile()
        this.props.history.push("/")

    }

  render() {return null}
}

export default connect(null, { logoutUser, clearCurrentProfile })(Logout)
