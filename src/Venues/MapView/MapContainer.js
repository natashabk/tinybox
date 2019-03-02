import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import MapCard from "./MapCard";

const geoURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const key = "&key=AIzaSyD22bjcOaQlswMChJ_aHJqBh0R8To6cZ9U";
// the key should be in an env file,
// that uses webpack (in your case cra to fill this dynamically
// during build time
// look for libs that do that , specifically for create react app
// keywoards are env, envfiles, apikeys in create-react-app)

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    allMarkers: []
  };

  getCoordinates(address, city, name) {
    const addressURL = address.replace(/[, ]+|[']+/g, "+").trim();
    fetch(`${geoURL}${addressURL}+${city}${key}`, {
      method: "GET"
    })
      .then(resp => resp.json())
      .then(resp => this.marker(resp.results[0].geometry.location, name));
  }

  marker(coordinates, name) {
    let newMarker = {};
    newMarker["name"] = name;
    newMarker["coordinates"] = coordinates;
    this.setState({
      allMarkers: [...this.state.allMarkers, newMarker]
    });
  }

  generateMarker(name, coordinates) {
    return (
      <Marker onClick={this.onMarkerClick} position={coordinates} name={name} />
    );
  }

  onMarkerClick = (props, marker) => {
    this.props.selectVenue(props.name)
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentDidMount() {
    this.props.venues.map(ven => {
      this.getCoordinates(ven.address1, ven.city, ven.name);
    });
  }

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
            {this.state.allMarkers.map(v =>
              this.generateMarker(v["name"], v["coordinates"])
            )}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <p id="infoBox">
                  {this.props.selectedPlace.name}
                </p>
              </div>
            </InfoWindow>
          </Map>
        </div>
        <div className="col-sm-6" id="venueCol">
          <MapCard
            venue={this.props.selectedPlace}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD22bjcOaQlswMChJ_aHJqBh0R8To6cZ9U"
})(MapContainer);
