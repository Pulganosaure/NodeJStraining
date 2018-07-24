import React, { Component } from 'react';
import './Bootstrap/bootstrap.min.css';
import Navbar from './navbar/navbar.js';
import BGSData from './BGSMonitoring/bgsmonitoring.js';


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
              <BGSData/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
