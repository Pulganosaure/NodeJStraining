import React from 'react';
import { NavLink } from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return (
      <div>
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
                  exact to='/a'>
                  BGSMonitoring
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
              <NavLink
                className='nav-link'
                exact to='/profil'>
                Profil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className='nav-link'
                exact to='/connexion'>
                connexion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className='nav-link'
                exact to='/inscription'>
                inscription
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )}
  }

  export default Navbar;
