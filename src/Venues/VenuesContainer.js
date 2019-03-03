import React, { Component } from "react";
import CardContainer from "./ListView/CardContainer";
import MapContainer from "./MapView/MapContainer";
import FilterButton from "./Components/FilterButton";
import DisplayButton from "./Components/DisplayButton";
import "../Styling/Cards.scss"

export default class VenuesContainer extends Component {
  state = {
    allVenues: [],
    filteredVenues: [],
    pages: 0,
    loading: true,
    cardView: true,
    filterView: false,
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
      allVenues: venues,
      filteredVenues: venues,
      pages: venues.length / 10 + 1,
      loading: false
    });
  };

  toggleView = (view) => {
    if (view === "page") {
    this.setState({
      cardView: !this.state.cardView
    })
    } else if (view === "filterOn") {
      let fv = this.state.allVenues.filter(v => v.favorite === true)
      this.setState({
        filterView: true,
        filteredVenues: fv,
        pages: fv.length / 10 + 1 
      })
    } else if (view ==="filterOff") {
      let fv = this.state.allVenues
      this.setState({
        filterView: false,
        filteredVenues: fv,
        pages: fv.length / 10 + 1 
      })
    }
  };

  selectVenue = selection => {
    const selectedVenue = this.state.allVenues.filter(v => v.name === selection);
    this.setState({
      selectedPlace: selectedVenue[0],
      cardView: false
    });
  };

  toggleFavorite = id => {
    let newVenues = this.state.allVenues.slice()
    newVenues.forEach(v=> {
      if (v.id === id) {
        v.favorite = !v.favorite
      }
    })
    this.setState({
      allVenues: newVenues
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
          filterView={this.state.filterView}
          toggleView={this.toggleView}
        />
        {this.state.cardView ? (
          <CardContainer
            venues={this.state.filteredVenues}
            pages={this.state.pages}
            loading={this.state.loading}
            toggleView={this.toggleView}
            selectVenue={this.selectVenue}
            toggleFavorite={this.toggleFavorite}
          />
        ) : (
          <MapContainer
            venues={this.state.filteredVenues}
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
