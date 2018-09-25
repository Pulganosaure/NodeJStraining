import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js'
import './style/reset.css'
import './style/mainpage.css'
import './style/Bootstrap/bootstrap.css'
import RoutesList from './Routes/Route'



class App extends Component {
  render() {
    return  (
      <div className="App ">
        <header className="App-header">
          <Navbar/>
        </header>
        <div className="container pt-5 background">
          <RoutesList/>
        </div>
      </div>
    )
  }
}

export default App;
