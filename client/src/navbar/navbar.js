import React from 'react';
import { NavLink } from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-light">
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
                  exact to='/BGSMonitoring'>
                  BGSMonitoring
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className='nav-link'
                exact to='/test'>
                test
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className='nav-link'
                exact to='/expandto'>
                Expansions
              </NavLink>
            </li>
          </ul>


          <ul className="navbar-nav">
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
      </nav>
    </div>
    )}
  }

  export default Navbar;
