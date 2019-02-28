import React, { Component } from "react";
import VenueCard from "./VenueCard";

export default class CardContainer extends Component {
 state = {
   venues:[]
 };

  getVenues() {
    fetch('https://venue-lister.herokuapp.com/venues', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
    }}).then(resp => resp.json())
    .then(resp=> this.setState({
      venues: resp}))
  }

  populateCards(venue) {
    return (
      <VenueCard 
        name={venue.name}
        city={venue.city}
        />
    )
  }

  componentDidMount() {
    this.getVenues()
  }

  render() {
    return (<div>
      {this.state.venues.map(venue=> this.populateCards(venue))}
      </div>);
  }
}
