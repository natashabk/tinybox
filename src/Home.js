import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
      <h1>TinyBox</h1>
      <h4>unique space in the uk.</h4>
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


