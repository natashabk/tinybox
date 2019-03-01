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
    selectedPlace: {}
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

  selectVenue = (selection) => {
    const selectedVenue = this.state.venues.filter(v => v.name === selection)
    this.setState({
      selectedPlace: {
        id: selectedVenue[0].id,
        name: selectedVenue[0].name,
        city: selectedVenue[0].city,
        address: selectedVenue[0].address1,
        listing_text: selectedVenue[0].listing_text,
        postcode: selectedVenue[0].postcode
      },
      cardView: false
    })
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
    // console.log(this.state.selectedPlace)
    return (
      <div className="venuesContainer">
       {this.displayButton()}
        {this.state.cardView ? (
          <CardContainer
            venues={this.state.venues}
            pages={this.state.pages}
            loading={this.state.loading}
            toggleView={this.toggleView}
            selectVenue={this.selectVenue}
          />
        ) : (
          <MapContainer
            venues={this.state.venues}
            pages={this.state.pages}
            loading={this.state.loading}
            toggleView={this.toggleView}
            selectedPlace={this.state.selectedPlace}
            selectVenue={this.selectVenue}
          />
        )}
      </div>
    );
  }
}
