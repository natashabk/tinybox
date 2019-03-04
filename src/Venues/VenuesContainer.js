import React, { Component } from "react";
import CardContainer from "./ListView/CardContainer";
import MapContainer from "./MapView/MapContainer";
import BookingContainer from "./BookingView/BookingContainer"
import FilterButton from "./Components/FilterButton";
import DisplayButton from "./Components/DisplayButton";
import "../Styling/Cards.scss";

export default class VenuesContainer extends Component {
  state = {
    venues: [],
    loading: true,
    view: "list",
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

  toggleView = view => {
    if (view === "list") {
    this.setState({
      view: "list"
    })
  } else if (view === "map") {
    this.setState({
      view: "map"
    })
  } else if (view === "book") {
    this.setState({
      view: "book"
    })
    }
  };

  displayedPage() {
    if (this.state.view === "list") {
      return <CardContainer
            venues={this.filteredVenues()}
            loading={this.state.loading}
            toggleView={this.toggleView}
            selectVenue={this.selectVenue}
            toggleFavorite={this.toggleFavorite}
          />
    } else if (this.state.view === "map") {
      return <MapContainer
            venues={this.filteredVenues()}
            toggleView={this.toggleView}
            selectedPlace={this.state.selectedPlace}
            selectVenue={this.selectVenue}
            toggleFavorite={this.toggleFavorite}
          />
    } else if (this.state.view === "book") {
      return <BookingContainer 
        venue={this.state.selectedPlace}
      />
    }
  }

  toggleFilter = () => {
    this.setState({
      favorites: !this.state.favorites
    });
  };

  filteredVenues() {
    return this.state.favorites
      ? this.state.venues.filter(v => v.favorite === true)
      : this.state.venues;
  }

  selectVenue = (selection, action) => {
    const selectedVenue = this.state.venues.filter(v => v.name === selection);
    this.setState({
      selectedPlace: selectedVenue[0],
      view: action
    });
  };

  toggleFavorite = id => {
    let newVenues = this.state.venues.slice();
    newVenues.forEach(v => {
      if (v.id === id) {
        v.favorite = !v.favorite;
      }
    });
    this.setState({
      venues: newVenues
    });
  };

  componentDidMount() {
    this.getImages();
    this.getVenues();
  }

  render() {
    return (
      <div className="venuesContainer">
        <DisplayButton
          view={this.state.view}
          toggleView={this.toggleView}
        />
        <FilterButton
          favorites={this.state.favorites}
          toggleFilter={this.toggleFilter}
        />
        {this.displayedPage()}
      </div>
    );
  }
}
