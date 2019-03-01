import React, { Component } from "react";
import "./Styling/App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import VenuesContainer from "./Venues/VenuesContainer";
import MapContainer from "./Venues/MapContainer";
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/venues" component={VenuesContainer} />
          <Route path="/map" component={MapContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
