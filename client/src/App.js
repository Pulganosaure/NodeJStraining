import React, { Component } from 'react';
import Navbar from './navbar/navbar.js'
import './Bootstrap/bootstrap.min.css'
import RoutesList from './Routes/Route'



class App extends Component {
  render() {
    return  (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <div className="container">
          <RoutesList/>
        </div>
      </div>
    )
  }
}

export default App;
