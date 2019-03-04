import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Styling/Home.scss";

const words = ["event", "conference", "office party", "offsite"];

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <h1>TinyBox</h1>
        <div className="content">
          <div className="content__container">
            <ul className="content__container__list">
              {words.map(word => (
                <li className="content__container__list__item" key={word}>
                  {word}
                </li>
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
        <Button onClick={() => this.props.history.push("/venues")} variant="primary" type="submit">
          Browse All Listings
        </Button>
      </div>
    );
  }
}
