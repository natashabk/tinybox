import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { HeartIcon, ListUnorderedIcon } from "react-octicons";

export default class FavoritesFilter extends Component {

  filterView() {
    const favorites = this.props.venues.filter(v => v.favorite === true)
    console.log(favorites)
  }
  
  filterButton() {
    return this.props.faveFilter ? (
      <Button id="viewBtn" onClick={() => this.filterView()}>
        <ListUnorderedIcon /> Back to List{" "}
      </Button>
      
    ) : (
      <Button id="viewBtn" onClick={() => this.filterView()}>
        <HeartIcon /> Your Favorites{" "}
      </Button>
    );
  }

  render() {
  return (
    <div>
      {this.filterButton()}
    </div>
  )
  }
}