import React, { Component } from 'react';
import './Bootstrap/bootstrap.min.css';
import Navbar from './navbar/navbar.js';
import Routes_List from './Routes/Route'

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <div className="container">
          <div className="row">
            <div className="col">
              <Routes_List />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
