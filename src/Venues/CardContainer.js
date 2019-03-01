import React, { Component } from "react";
import VenueCard from "./VenueCard";
import Pagination from "./Pagination";


export default class CardContainer extends Component {
  state = {
    venues: [],
    start: 0,
    active: 1,
    pages: 0,
    loading: true
  };

  getVenues() {
    fetch("https://venue-lister.herokuapp.com/venues", {
      method: "GET",
      headers: {"Content-Type": "application/json"}
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

  populateCards(venue) {
    return <VenueCard name={venue.name} city={venue.city} />;
  }

  nextPage = () => {
    if (this.state.active < this.state.pages - 1){
    this.setState({
      active: this.state.active + 1,
      start: this.state.start + 10
    })}
  };

  prevPage = () => {
    if (this.state.active > 1) {
    this.setState({
      active: this.state.active - 1,
      start: this.state.start - 10
    })
    }
  };

  jumpPage = (num) => {
    this.setState({
      active: num,
      start: num*10 - 10
    })
  }

  loading() {
    return this.state.loading ? 
      <div className="loader" /> 
      : 
      <Pagination
      active={this.state.active}
      pages={this.state.pages}
      nextPage={this.nextPage}
      prevPage={this.prevPage}
      jumpPage={this.jumpPage}
    />
  }

  componentDidMount() {
    this.getVenues();
  }

  render() {
    return (
      <div className="container">
        <div className="card-deck text-center">
        {this.state.venues
          .slice(this.state.start, this.state.start+10)
          .map(venue => this.populateCards(venue))}
        </div>
        {this.loading()}
      </div>
    );
  }
}
