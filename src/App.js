import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Styling/App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import VenuesContainer from "./Venues/VenuesContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route component={routerProps =><NavBar {...routerProps} />}/>
          <Route
            exact
            path="/"
            component={routerProps => <Home {...routerProps} />}
          />
          <Route
            path="/venues"
            component={routerProps => <VenuesContainer {...routerProps} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
