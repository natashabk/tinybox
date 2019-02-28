import React, { Component } from 'react';
import logo from './Images/Logo.png';
import './Styling/App.css';
import Home from './Home';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <Home/>
      </div>
    );
  }
}

export default App;
