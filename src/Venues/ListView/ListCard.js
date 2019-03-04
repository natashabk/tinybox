import React, { Component } from "react";
import { LocationIcon, HeartIcon } from "react-octicons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class ListCard extends Component {
  displayFavorite() {
    return this.props.venue.favorite ? "favorite" : "default";
  }

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.venue.imgURL} />
        <Card.Body>
          <Card.Title>{this.props.venue.name}</Card.Title>
          <Card.Text>{this.props.venue.city}</Card.Text>
          <div className="row" id="card">
            <div
              className="col-sm"
              onClick={() =>
                this.props.selectVenue(this.props.venue.name, "map")
              }
            >
              <LocationIcon height={35} width={55} id={this.props.venue.name} />
            </div>
            <div className="col-sm">
              <Button
                variant="primary"
                onClick={() =>
                  this.props.selectVenue(this.props.venue.name, "book")
                }
              >
                Book
              </Button>
            </div>
            <div
              className="col-sm"
              id={this.displayFavorite()}
              onClick={() => this.props.toggleFavorite(this.props.venue.id)}
            >
              <HeartIcon height={45} width={55} />
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
