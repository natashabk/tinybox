import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import MapCard from "./MapCard";
import "../../Styling/Map.scss";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {}
  };

  generateMarker(name, coordinates) {
    return (
      <Marker
        onClick={this.onMarkerClick}
        position={coordinates}
        name={name}
        key={name + coordinates.lat}
      />
    );
  }

  onMarkerClick = (props, marker) => {
    this.props.selectVenue(props.name, "map");
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div className="row" id="map">
        <div className="col-sm-6" id="mapCol">
          <Map
            google={this.props.google}
            zoom={12}
            initialCenter={{
              lat: 53.3416667,
              lng: -6.2500275
            }}
            className="map"
            zoomControl={true}
            mapTypeControl={false}
            fullscreenControl={false}
          >
            {this.props.venues.map(venue =>
              this.generateMarker(venue.name, venue.coordinates)
            )}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <p id="infoBox">{this.props.selectedPlace.name}</p>
              </div>
            </InfoWindow>
          </Map>
        </div>
        <div className="col-sm-6" id="venueCol">
          <MapCard
            venue={this.props.selectedPlace}
            selectVenue={this.props.selectVenue}
            toggleFavorite={this.props.toggleFavorite}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
