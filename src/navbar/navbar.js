import React from 'react';
import { NavLink } from 'react-router-dom'
import BGSData from './../BGSMonitoring/bgsmonitoring.js';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          className='link'
          exact to='/BGSMonitoring'>
          BGSMonitoring
        </NavLink>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" role="navigation">
        <a className="navbar-brand" href="#">Galanews</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">

            </li>
            <li className="nav-item">
              <a className="nav-link" href="factions/factions_list.php">Communauté</a>
            </li>
            <li className="pr-2">
              <div  className="btn-group dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Events</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="events/Event_Creator.php">ajouter un événement</a>
                  <a className="dropdown-item" href="events/Event_Manager.php">voir les events</a>
                  <a className="dropdown-item" href="events/Event_Remover.php">supprimer un évenement</a>
                  <a className="dropdown-item disabled" href="#">Comming Soon</a>
                </div>
              </div>
            </li>
            <li className="pr-2">
              <div  className="btn-group dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Symbiose</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item "href="';br_for_folders($nbr_folder); echo 'Symbiose/add_request.php">Envoyer une demande</a>
                  <a className="dropdown-item" href="';br_for_folders($nbr_folder); echo 'Symbiose/Requests.php">Voir les requêtes</a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">connexion</a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">inscription</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )}
  }

  export default Navbar;
