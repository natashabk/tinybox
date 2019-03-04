import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { HeartIcon, ListUnorderedIcon } from "react-octicons";

export default class FilterButton extends Component {
  
  filterButton() {
      if (this.props.view !== "book") {
        return this.props.favorites ? (
      <Button id="faveBtn0" onClick={() => this.props.toggleFilter()}>
        <ListUnorderedIcon /> Show All{" "}
      </Button>
    ) : (
      <Button id="faveBtn1" onClick={() => this.props.toggleFilter()}>
        <HeartIcon /> Your Favorites{" "}
      </Button>
    );
      }
  }

  render() {
  return (
    <div>
      {this.filterButton()}
    </div>
  )
  }
}