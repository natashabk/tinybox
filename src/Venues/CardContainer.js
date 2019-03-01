import React, { Component } from "react";
import VenueCard from "./VenueCard";
import Pagination from "./Pagination";


export default class CardContainer extends Component {
  state = {
    start: 0,
    active: 1,
  };

  populateCards(venue) {
    return <VenueCard name={venue.name} city={venue.city} />;
  }

  nextPage = () => {
    if (this.state.active < this.props.pages - 1){
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
    return this.props.loading ? 
      <div className="loader" /> 
      : 
      <Pagination
      active={this.state.active}
      pages={this.props.pages}
      nextPage={this.nextPage}
      prevPage={this.prevPage}
      jumpPage={this.jumpPage}
    />
  }

  render() {
    return (
      <div className="container">
        <div className="card-deck text-center">
        {this.props.venues
          .slice(this.state.start, this.state.start+10)
          .map(venue => this.populateCards(venue))}
        </div>
        {this.loading()}
      </div>
    );
  }
}
