import React, { Component } from 'react';
import logo from './Images/Logo.png';
import './Styling/App.css';
import Home from './Home';
import NavBar from './NavBar';
import CardContainer from './Venues/CardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <Home/>
       <hr></hr>
      <CardContainer />
      </div>
    );
  }
}

export default App;
