import React, { Component } from "react";
import { LocationIcon, HeartIcon } from "react-octicons";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import P0 from "../../Images/Placeholder1.jpg";
import P1 from "../../Images/Placeholder2.jpg";
import P2 from "../../Images/Placeholder3.jpg";
import P3 from "../../Images/Placeholder4.jpg";
import P4 from "../../Images/Placeholder5.jpg";

const placeholders = [P0, P1, P2, P3, P4];

export default class ListCard extends Component {
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
          <div className="row" id="card">
            <div
              className="col-sm"
              onClick={() => this.props.selectVenue(this.props.name)}
            >
              <LocationIcon height={35} width={55} id={this.props.name} />
            </div>
            <div className="col-sm">
              <Button variant="primary">Book</Button>
            </div>
            <div
              className="col-sm"
              onClick={this.toggleFavorite}
              style={{ color: this.setFavoriteColor() }}
            >
              <HeartIcon height={45} width={55} />
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
