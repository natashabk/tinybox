import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { LocationIcon, ArrowLeftIcon } from "react-octicons";

export default class DisplayButton extends Component {

  displayButton() {
    return this.props.view === "list" ? (
      <Button id="viewBtn1" onClick={() => this.props.toggleView("map")}>
        <LocationIcon /> Map View{" "}
      </Button>
    ) : (
      <Button id="viewBtn0" onClick={() => this.props.toggleView("list")}>
        <ArrowLeftIcon /> Back to List{" "}
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