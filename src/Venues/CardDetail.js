import React, { Component } from "react";
import { LocationIcon, HeartIcon } from "react-octicons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class CardZoom extends Component{
  render() {
    return (
      <Card className="cardDetail">
      <Card.Img variant="top" src="https://media.sabrecdn.com/metropolehotel/application/files/3714/9631/0504/metropole_conference-26.jpg" />
      <Card.Body>
        <Card.Title>{this.props.venue.name}</Card.Title>
        <Card.Subtitle>
          {this.props.venue.address}{", "} 
          {this.props.venue.city}
          {this.props.venue.postcode}
        </Card.Subtitle>
      
        <Card.Text id="detail">
          {this.props.venue.listing_text}
        </Card.Text>
       
        <div className="row" id="card">
          <div className="col-sm">
            <LocationIcon />
          </div>
          <div className="col-sm">
            <Button variant="primary">Book</Button>
          </div>
          <div
            className="col-sm"
            // onClick={this.toggleFavorite}
            // style={{ color: this.setFavoriteColor() }}
          >
            <HeartIcon />
          </div>
        </div>
      </Card.Body>
    </Card>
    );
  }
}
