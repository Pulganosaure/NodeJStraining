import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import NotifMenu from '../notifications/home.js'
import '../../style/navbar.css'
import { connect } from 'react-redux'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navabar">
        <div className="nav-container">
          <div className="menu">
            <div className="navMenu">
              <NavLink
                exact to='/'>
                Home
              </NavLink>
              <NavLink
                exact to='/Ressources'>
                Ressources
              </NavLink>
              <NavLink
                exact to='/events'>
                Events
              </NavLink>
              <NavLink
                exact to='/gallery'>
                PhotoGalery
              </NavLink>
              <NavLink
                exact to='/tools'>
                Tools
              </NavLink>
            </div>
            <div className="auth">
              {(this.props.auth.isAuthenticated)
                ? <Fragment>
                  <NotifMenu/>
                  <NavLink
                    exact to='/profil'>
                    Profil
                  </NavLink>
                  <NavLink
                    exact to='/disconnect'>
                    Log Out
                  </NavLink>
                </Fragment>
                : <Fragment>
                  <NavLink
                    exact to='/login'>
                    Login
                  </NavLink>
                  <NavLink
                    exact to='/register'>
                    Register
                  </NavLink>
                </Fragment>
              }
            </div>
          </div>
        </div>
      </nav>
    )}
  }
  const mapStateToProps = (state) => ({
    auth: state.auth,
  })

  export default connect(mapStateToProps)(Navbar);
