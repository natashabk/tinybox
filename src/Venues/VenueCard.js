import React, { Component } from "react";
import { LocationIcon, HeartIcon } from "react-octicons";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import P0 from "../Images/Placeholder1.jpg";
import P1 from "../Images/Placeholder2.jpg";
import P2 from "../Images/Placeholder3.jpg";
import P3 from "../Images/Placeholder4.jpg";
import P4 from "../Images/Placeholder5.jpg";

const placeholders = [P0, P1, P2, P3, P4];

export default class VenueCard extends Component {
  state = {
    favorite: false
  };

  randomPlaceholder() {
    const num = Math.floor(Math.random() * 5);
    return placeholders[num];
  }

  toggleFavorite = () => {
    this.setState({
      favorite: !this.state.favorite
    });
  };

  // put it in some kind of config?
  // or even better
  // change the calss of the heart
  setFavoriteColor() {
    return this.state.favorite ? "#cc3d55" : "rgb(0,0,0,.4)";
  }

  render() {
    this.randomPlaceholder();
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.randomPlaceholder()} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.city}</Card.Text>
          <div className="row">
            <div className="col-sm">
              <LocationIcon />
            </div>
            <div className="col-sm">
              <Button variant="primary">Book</Button>
            </div>
            <div
              className="col-sm"
              onClick={this.toggleFavorite}
              style={{ color: this.setFavoriteColor() }}
            >
              <HeartIcon />
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
