import React, { Component } from "react";
import { HeartIcon } from "react-octicons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class MapCard extends Component {
  defaultName() {
    return this.props.venue.name
      ? this.props.venue.name
      : "Select Pin to View Details";
  }

  defaultAddress() {
    return this.props.venue.address1
      ? `${this.props.venue.address1}, ${this.props.venue.city} ${
          this.props.venue.postcode
        }`
      : null;
  }

  defaultImage() {
    return this.props.venue.imgURL ?
    <Card.Img variant="top" src={this.props.venue.imgURL} id="cardImg"/> :
      <div className="cardDetailImg" /> 
  }

  displayFavorite(){
    return this.props.venue.favorite ?
      "favorite" : "default"
  }

  displayIcons() {
    return this.props.venue.id ? (
      <div id="mapIcons">
        <div
        id={this.displayFavorite()}
        onClick={() => this.props.toggleFavorite(this.props.venue.id)}
        >
        <HeartIcon height={45} width={55} />
        </div>
        <Button variant="primary"
        onClick={() =>
          this.props.selectVenue(this.props.venue.name, "book")
        }>
        Book</Button>
      </div>
    ) : null;
  }

  render() {
    return (
      <Card className="cardDetail">
       {this.defaultImage()}
        <Card.Body>
          <Card.Title id="cardDetailTitle">{this.defaultName()}</Card.Title>
          <Card.Subtitle>{this.defaultAddress()}</Card.Subtitle>
          <Card.Text id="detail">{this.props.venue.listing_text}</Card.Text>
          <Card.Text>{this.displayIcons()}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
