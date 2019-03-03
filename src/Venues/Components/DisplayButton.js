import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { LocationIcon, ListUnorderedIcon } from "react-octicons";

export default class DisplayButton extends Component {

  displayButton() {
    return this.props.cardView ? (
      <Button id="viewBtn" onClick={() => this.props.toggleView("page")}>
        <LocationIcon /> Map View{" "}
      </Button>
    ) : (
      <Button id="viewBtn" onClick={() => this.props.toggleView("page")}>
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