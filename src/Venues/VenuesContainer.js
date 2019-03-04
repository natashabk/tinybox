import React, { Component } from "react";
import CardContainer from "./ListView/CardContainer";
import MapContainer from "./MapView/MapContainer";
import BookingContainer from "./BookingView/BookingContainer";
import FilterButton from "./Components/FilterButton";
import DisplayButton from "./Components/DisplayButton";
import "../Styling/Cards.scss";

const geoURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const API_KEY = `&key=${process.env.REACT_APP_GOOGLE_API_KEY}`

export default class VenuesContainer extends Component {
  state = {
    venues: [],
    loading: true,
    view: "list",
    favorites: false,
    selectedPlace: {},
    photos: []
  };

  // Build complete venues array with initial data, stock photos from Firebase API,
  // and latitude/longitude from Google Maps API (used for markers in MapView)

  getVenues() {
    fetch("https://venue-lister.herokuapp.com/venues", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(resp => resp.json())
      .then(resp => this.addAttributes(resp))
      .then(resp => this.getCoordinates(resp));
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

  getCoordinates = venues => {
    let newVenues = venues.slice();
    newVenues.forEach(v => {
      v.coordinates = {};
      fetch(
        `${geoURL}${v.address1.replace(/[, ]+|[']+/g, "+").trim()}+${
          v.city
        }${API_KEY}`,
        {
          method: "GET"
        }
      )
        .then(resp => resp.json())
        .then(resp => (v.coordinates = resp.results[0].geometry.location));
    });
    this.setState({
      venues: newVenues
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
      loading: false
    });
    return venues;
  };

  // Toggle between List view, Map view, and Booking view (all use venues) 

  toggleView = view => {
    if (view === "list") {
      this.setState({
        view: "list"
      });
    } else if (view === "map") {
      this.setState({
        view: "map"
      });
    } else if (view === "book") {
      this.setState({
        view: "book"
      });
    }
  };

  displayedPage() {
    if (this.state.view === "list") {
      return (
        <CardContainer
          venues={this.filteredVenues()}
          loading={this.state.loading}
          toggleView={this.toggleView}
          selectVenue={this.selectVenue}
          toggleFavorite={this.toggleFavorite}
        />
      );
    } else if (this.state.view === "map") {
      return (
        <MapContainer
          venues={this.filteredVenues()}
          toggleView={this.toggleView}
          selectedPlace={this.state.selectedPlace}
          selectVenue={this.selectVenue}
          toggleFavorite={this.toggleFavorite}
        />
      );
    } else if (this.state.view === "book") {
      return <BookingContainer venue={this.state.selectedPlace} />;
    }
  }

  // Toggle between showing User Favorites and All Venues (used in Map and List view) 
 
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

  // Toggle individual venue favorite (used in Map and List view)

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

// Select individual venue (used to navigate to Map or Booking)
// 'selection' is the venue object that will be displayed, 
// 'action' is 'map' or 'book'

  selectVenue = (selection, action) => {
    const selectedVenue = this.state.venues.filter(v => v.name === selection);
    this.setState({
      selectedPlace: selectedVenue[0],
      view: action
    });
  };

  componentDidMount() {
    this.getImages();
    this.getVenues();
  }

  render() {
    return (
      <div className="venuesContainer">
        <DisplayButton view={this.state.view} toggleView={this.toggleView} />
        <FilterButton
          favorites={this.state.favorites}
          toggleFilter={this.toggleFilter}
          view={this.state.view}
        />
        {this.displayedPage()}
      </div>
    );
  }
}
