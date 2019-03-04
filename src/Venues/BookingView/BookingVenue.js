import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class BookingVenue extends Component {
  formatAddress() {
    return `${this.props.venue.address1}, ${this.props.venue.city} ${
      this.props.venue.postcode
    }`;
  }
  
  render() {
    return (
      <Card className="cardDetail">
        <Card.Img variant="top" src={this.props.venue.imgURL} id="cardImg" />
        <Card.Body>
          <Card.Title id="cardDetailTitle">{this.props.venue.name}</Card.Title>
          <Card.Subtitle>{this.formatAddress()}</Card.Subtitle>
          <Card.Text id="bookDetail">{this.props.venue.listing_text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
