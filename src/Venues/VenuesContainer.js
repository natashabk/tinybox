import React, { Component } from "react";
import CardContainer from "./CardContainer";
import MapContainer from "./MapContainer";

export default class VenuesContainer extends Component {
  state = {
    venues: [],
    pages: 0,
    loading: true
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

  componentDidMount() {
    this.getVenues();
  }

  render() {
    return (
      <MapContainer
        venues={this.state.venues}
        pages={this.state.pages}
        loading={this.state.loading}
      />
    );
  }
}
