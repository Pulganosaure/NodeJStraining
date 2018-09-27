import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import ProfileAccount from './account.js'
import ProfileArchivements from './archivements.js'
import ProfileSecurity from './security.js'
import ProfilEvents from './events.js'
import ProfileCharacters from './characters.js'
import UserDashboard from './dashboard.js'

class ProfileHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onglet: '',
      users: [],
    }
    this.switchOnglet = this.switchOnglet.bind(this)
  }

  componentDidMount()
  {
    if(!this.props.auth.isAuthenticated) {
      this.props.history.push("/login")
      console.log(this.props.auth.stats)
    }
  }

  switchOnglet() {
    switch (this.state.onglet) {
      case 'Account':
      return <ProfileAccount user={this.props.auth.user} />
      case 'Security':
      return <ProfileSecurity/>
      case 'Characters':
      return <ProfileCharacters apiKey={this.props.auth.stats.Informations.gw2ApiKey}/>
      case 'Archivements':
      return <ProfileArchivements/>
      case 'Events':
      return <ProfilEvents/>
      default:
      return <UserDashboard user={this.props.auth.user} stats={this.props.auth.stats}/>
    }
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-2 pl-0">
            <ul className="list-group mt-5 pt-4">
              <button type="button"
                className="list-group-item list-group-item-action"
                onClick={() => this.setState(
                  {
                    onglet: "Dashboard"
                  }
                )}>
                Dashboard
              </button>
              <button type="button"
                className="list-group-item list-group-item-action"
                onClick={() => this.setState(
                  {
                    onglet: "Account"
                  }
                )}>
                My Account
              </button>
              <button type="button"
                className="list-group-item list-group-item-action"
                onClick={() => this.setState(
                  {
                    onglet: "Security"
                  }
                )}>
                Security
              </button>
              <button type="button"
                className="list-group-item list-group-item-action"
                onClick={() => this.setState(
                  {
                    onglet: "Characters"
                  }
                )}>
                My Characters
              </button>
              <button type="button"
                className="list-group-item list-group-item-action"
                onClick={() => this.setState(
                  {
                    onglet: "Archivements"
                  }
                )}>
                Archivements
              </button>
              <button type="button"
                className="list-group-item list-group-item-action"
                onClick={() => this.setState(
                  {
                    onglet: "Events"
                  }
                )}>
                Events
              </button>
            </ul>
          </div>
          <div className="col-10 pr-0">
            {this.switchOnglet()}
          </div>
        </div>
      </Fragment>
      )
    }
  }

  const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth,
  })

  export default connect(mapStateToProps)(ProfileHome)
