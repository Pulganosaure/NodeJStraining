import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import NotifMenu from '../notifications/home.js'
import { connect } from 'react-redux'

class Navbar extends React.Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-light">
          <div className="container">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  className='nav-link text-light'
                  exact to='/'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className='nav-link'
                  exact to='/events'>
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className='nav-link'
                  exact to='/gallery'>
                  PhotoGalery
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NotifMenu/>
              </li>
              {console.log(this.props.auth.isAuthenticated)}
              {(this.props.auth.isAuthenticated)
                ? <Fragment>
                  <li className="nav-item">
                    <NavLink
                      className='nav-link'
                      exact to='/profil'>
                      Profil
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className='nav-link'
                      exact to='/disconnect'>
                      Log Out
                    </NavLink>
                  </li>
                </Fragment>
                : <Fragment>
                  <li className="nav-item">
                    <NavLink
                      className='nav-link'
                      exact to='/login'>
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className='nav-link'
                      exact to='/register'>
                      Register
                    </NavLink>
                  </li>
                </Fragment>

              }
            </ul>
          </div>
        </nav>
      </Fragment>
    )}
  }
  const mapStateToProps = (state) => ({
    auth: state.auth,
  })

  export default connect(mapStateToProps)(Navbar);
