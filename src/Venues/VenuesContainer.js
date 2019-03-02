import React, { Component } from "react";
import CardContainer from "./ListView/CardContainer";
import MapContainer from "./MapView/MapContainer";
import "../Styling/Cards.scss"
import Button from "react-bootstrap/Button";
import { LocationIcon, ListUnorderedIcon } from "react-octicons";

export default class VenuesContainer extends Component {
  state = {
    venues: [],
    pages: 0,
    loading: true,
    cardView: true,
    selectedPlace: {},
    photos: []
  };

  getVenues() {
    fetch("https://venue-lister.herokuapp.com/venues", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(resp => resp.json())
      .then(resp => this.addAttributes(resp));
  }

  getImages() {
    fetch("https://us-central1-picapi-54803.cloudfunctions.net/venuePictures", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          photos: resp
        })
      );
  }

  toggleView = () => {
    this.setState({
      cardView: !this.state.cardView
    });
  };

  addAttributes = venues => {
    venues.forEach(v => {
      const num = Math.floor(Math.random() * 25);
      v.imgURL = this.state.photos[num];
      v.favorite = false;
    });
    this.setState({
      venues: venues,
      pages: venues.length / 10 + 1,
      loading: false
    });
  };

  selectVenue = selection => {
    const selectedVenue = this.state.venues.filter(v => v.name === selection);
    this.setState({
      selectedPlace: selectedVenue[0],
      cardView: false
    });
  };

  displayButton() {
    return this.state.cardView ? (
      <Button id="viewBtn" onClick={() => this.toggleView()}>
        <LocationIcon /> Map View{" "}
      </Button>
    ) : (
      <Button id="viewBtn" onClick={() => this.toggleView()}>
        <ListUnorderedIcon /> Back to List{" "}
      </Button>
    );
  }

  toggleFavorite = id => {
    let newVenues = this.state.venues.slice()
    newVenues.forEach(v=> {
      if (v.id === id) {
        v.favorite = !v.favorite
      }
    })
    this.setState({
      venues: newVenues
    })
  }

  componentDidMount() {
    this.getImages();
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
            selectVenue={this.selectVenue}
            toggleFavorite={this.toggleFavorite}
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
