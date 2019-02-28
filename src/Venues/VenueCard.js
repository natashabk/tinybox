import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Placeholder from '../Images/Placeholder.jpg'

export default class VenueCard extends Component {
  render() {
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Placeholder} />
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
