import React, { Component } from "react";
import CardContainer from "./CardContainer";
import MapContainer from "./MapContainer";
import Button from "react-bootstrap/Button";

export default class VenuesContainer extends Component {
  state = {
    venues: [],
    pages: 0,
    loading: true,
    cardView: true
  };

  getVenues() {
    fetch("https://venue-lister.herokuapp.com/venues", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          venues: resp,
          pages: resp.length / 10 + 1,
          loading: false
        })
      );
  }

  toggleView = () => {
    this.setState({
      cardView: !this.state.cardView
    });
  }

  componentDidMount() {
    this.getVenues();
  }

  render() {
    return (
      <div className="venuesContainer">
        <Button id="viewBtn" onClick={() => this.toggleView()}>
          Map View
        </Button>
        {this.state.cardView ? (
          <CardContainer
            venues={this.state.venues}
            pages={this.state.pages}
            loading={this.state.loading}
            toggleView={this.toggleView}
          />
        ) : (
          <MapContainer
            venues={this.state.venues}
            pages={this.state.pages}
            loading={this.state.loading}
            toggleView={this.toggleView}
          />
        )}
      </div>
    );
  }
}
