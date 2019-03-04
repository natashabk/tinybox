import React, { Component } from "react";
import CardContainer from "./ListView/CardContainer";
import MapContainer from "./MapView/MapContainer";
import FilterButton from "./Components/FilterButton";
import DisplayButton from "./Components/DisplayButton";
import "../Styling/Cards.scss"

export default class VenuesContainer extends Component {
  state = {
    venues: [],
    loading: true,
    cardView: true,
    favorites: false,
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

  addAttributes = venues => {
    venues.forEach(v => {
      const num = Math.floor(Math.random() * 25);
      v.imgURL = this.state.photos[num];
      v.favorite = false;
    });
    this.setState({
      venues: venues,
      loading: false
    });
  };

  toggleView = () => {
    this.setState({
      cardView: !this.state.cardView
    })
  }
  
  toggleFilter = () => {
    this.setState({
      favorites: !this.state.favorites
    })
  }

  filteredVenues() {
    return this.state.favorites ? 
      this.state.venues.filter(v => v.favorite === true)
      : this.state.venues
  }

  selectVenue = selection => {
    const selectedVenue = this.state.venues.filter(v => v.name === selection);
    this.setState({
      selectedPlace: selectedVenue[0],
      cardView: false
    });
  };

  toggleFavorite = id => {
    let newVenues = this.state.venues.slice()
    newVenues.forEach(v=> {
      if (v.id === id) {
        v.favorite = !v.favorite
      }
    })
    this.setState({
      venues: newVenues,
    })
  }

  componentDidMount() {
    this.getImages();
    this.getVenues();
  }

  render() {
    return (
      <div className="venuesContainer">
        <DisplayButton 
          cardView={this.state.cardView}
          toggleView={this.toggleView}
        />
        <FilterButton 
          favorites={this.state.favorites}
          toggleFilter={this.toggleFilter}
        />
        {this.state.cardView ? (
          <CardContainer
            venues={this.filteredVenues()}
            loading={this.state.loading}
            toggleView={this.toggleView}
            selectVenue={this.selectVenue}
            toggleFavorite={this.toggleFavorite}
          />
        ) : (
          <MapContainer
            venues={this.filteredVenues()}
            toggleView={this.toggleView}
            selectedPlace={this.state.selectedPlace}
            selectVenue={this.selectVenue}
            toggleFavorite={this.toggleFavorite}
          />
        )}
      </div>
    );
  }
}
