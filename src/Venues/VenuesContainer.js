import React, { Component } from "react";
import CardContainer from "./CardContainer";
import MapContainer from "./MapContainer";
import Button from "react-bootstrap/Button";
import { LocationIcon, ArrowLeftIcon, ListUnorderedIcon } from "react-octicons";

export default class VenuesContainer extends Component {
  state = {
    venues: [],
    pages: 0,
    loading: true,
    cardView: true,
    selectedVenue: {}
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

  displayButton() {
      return this.state.cardView?
        <Button id="viewBtn" onClick={() => this.toggleView()}>
        <LocationIcon /> Map View </Button>
          :
        <Button id="viewBtn" onClick={() => this.toggleView()}>
        <ListUnorderedIcon /> Back to List </Button>
  }

  componentDidMount() {
    this.getVenues();
  }

  render() {
    return (
      <div className="venuesContainer">
       {this.displayButton()}
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
