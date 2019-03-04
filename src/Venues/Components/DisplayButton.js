import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { LocationIcon, ListUnorderedIcon } from "react-octicons";

export default class DisplayButton extends Component {

  displayButton() {
    return this.props.view === "list" ? (
      <Button id="viewBtn" onClick={() => this.props.toggleView("map")}>
        <LocationIcon /> Map View{" "}
      </Button>
    ) : (
      <Button id="viewBtn" onClick={() => this.props.toggleView("list")}>
        <ListUnorderedIcon /> Back to List{" "}
      </Button>
    );
  }

  render() {
    return (
      <div>
        {this.displayButton()}
      </div>
    )
    }
  }