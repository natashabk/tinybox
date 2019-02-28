import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Home extends Component {
  render() {
    return (
      <div>
      <Form>
        <Form.Group controlId="locationSearch">
          <Form.Label>Event location</Form.Label>
          <Form.Control type="text" placeholder="ex. Dublin, Ireland..." />
          <Button variant="primary" type="submit">
            Go!
          </Button>
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
      Browse All Listings
    </Button>
    </div>
    );
  }
}


