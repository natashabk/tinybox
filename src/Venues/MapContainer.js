import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const geoURL ="https://maps.googleapis.com/maps/api/geocode/json?address="
const key = "&key=AIzaSyD22bjcOaQlswMChJ_aHJqBh0R8To6cZ9U"

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
    allMarkers: []
  };

  getCoordinates(address, city, name) {
    const addressURL = address.replace(/[, ]+|[']+/g, "+").trim();
    fetch(`${geoURL}${addressURL}+${city}${key}`, {
      method: "GET"})
      .then(resp => resp.json())
      .then(resp => this.generateMarkers(resp.results[0].geometry.location, name));
  }

  generateMarkers(coordinates, name) {
  const newMarker = <Marker
        onClick={this.onMarkerClick}
        position={{coordinates}}
        name={name}
      />
  console.log(newMarker)
  //  this.setState({
  //    allMarkers: this.state.allMarkers.push(newMarker)
  //  })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentDidMount() {
    this.props.venues.map(ven=> {
      this.getCoordinates(ven.address1, ven.city, ven.name)
    })
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
         lat: 53.3241971,
         lng: -6.3157447
        }}
      >
      {/* {this.state.allMarkers} */}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
     
      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD22bjcOaQlswMChJ_aHJqBh0R8To6cZ9U'
})(MapContainer);