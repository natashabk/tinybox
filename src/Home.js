import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Styling/Home.scss";

const words = [
  "event",
  "workspace",
  "conference",
  "office party",
  "offsite",
  "training",
  "screening",
  "anything"
];

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <h1>TinyBox</h1>
        <div className="content">
          <div className="content__container">
            <ul class="content__container__list">
              {words.map(w => (
                <li class="content__container__list__item">{w}</li>
              ))}
            </ul>
          </div>
          <p className="content__container__text"> space in the uk.</p>
        </div>
        <Form onSubmit={() => this.props.history.push("/venues")}>
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
