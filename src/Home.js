import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
      <Form>
        <Form.Group>
          <div id="locationSearch">
          <Form.Control type="text" placeholder="Event location..." />
          <Button variant="primary" type="submit">
            Go!
          </Button>
          </div>
        </Form.Group>
      </Form>
      <Button href="/venues" variant="primary" type="submit">
      Browse All Listings
    </Button>
    </div>
    );
  }
}


