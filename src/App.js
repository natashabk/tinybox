import React, { Component } from "react";
import "./Styling/App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import CardContainer from "./Venues/CardContainer";
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/venues" component={CardContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
