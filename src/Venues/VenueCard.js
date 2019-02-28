import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class VenueCard extends Component {
  render() {
    console.log("on card")
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Text>
        {this.props.city}
      </Card.Text>
      <Button variant="primary">Book</Button>
    </Card.Body>
  </Card>
    )
  }
}
