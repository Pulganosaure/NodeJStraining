import React from 'react';
import ProfileAccount from './account.js'
import ProfileArchivements from './archivements.js'
import ProfileSecurity from './security.js'
import ProfilEvents from './events.js'
import ProfileCharacters from './characters.js'
import '../Bootstrap/bootstrap.min.css'
import * as profilsAPI from '../API/profils.js'

class ProfileHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onglet: '',
      users: [],
    }
    this.switchOnglet = this.switchOnglet.bind(this)
  }

  switchOnglet()
  {
    switch (this.state.onglet) {
      case 'Security':
      return <ProfileSecurity/>
      case 'Characters':
      return <ProfileCharacters/>
      case 'Archivements':
      return <ProfileArchivements/>
      case 'Events':
      return <ProfilEvents/>
      default:
      return <ProfileAccount/>
    }
  }

  componentDidMount() {
    profilsAPI.getUserList()
    .then(data =>
      this.setState({
        users: data,
      }))
    }

    render()
    {
      return (
        <div className="mt-5">
          <div className="row">
            <div className="col-2 pl-0">
              <ul className="list-group mt-5 pt-4">
                <button type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => this.setState(
                    {
                      onglet: "Account"
                    }
                  )}>
                  Account
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
        </div>
      )
    }
  }

  export default ProfileHome
