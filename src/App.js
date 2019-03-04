import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Styling/App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import VenuesContainer from "./Venues/VenuesContainer";
import Booking from "./Venues/BookingView/BookingContainer";

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
          <Route
            path="/venues"
            component={routerProps => <VenuesContainer {...routerProps} />}
          />
          <Route
            path="/book/:venue_id"
            component={routerProps => <Booking {...routerProps} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
