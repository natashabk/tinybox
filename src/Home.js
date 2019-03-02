import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Styling/Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <h1>TinyBox</h1>

<div className="content">
      <div className="content__container">

      <ul class="content__container__list">
      <li class="content__container__list__item">event</li>
      <li class="content__container__list__item">workspace</li>
      <li class="content__container__list__item">conference</li>
      <li class="content__container__list__item">office party</li>
      <li class="content__container__list__item">offsite</li>
      <li class="content__container__list__item">training</li>
      <li class="content__container__list__item">screening</li>
      <li class="content__container__list__item">anything</li>
      </ul>
      </div>
      <p className="content__container__text"> space in the uk.</p>
    </div>

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


