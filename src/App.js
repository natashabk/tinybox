import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./Styling/App.css";

import Home from "./Home";
import MapContainer from "./Venues/MapView/MapContainer";
import NavBar from "./NavBar";
import VenuesContainer from "./Venues/VenuesContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route
            exact
            path="/"
            component={routerProps => <Home {...routerProps} />}
          />
          <Route path="/venues" component={VenuesContainer} />
          <Route path="/map" component={MapContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
