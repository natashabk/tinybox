import React, { Component } from "react";
import "../../Styling/Booking.scss";
import BookingVenue from "./BookingVenue";
import BookingInfoCard from "./BookingInfoCard";

export default class Booking extends Component {
  render() {
    return (
      <div className="bookRow">
        <div className="col-sm-6" id="bookCol">
          <BookingInfoCard venue={this.props.venue} />
        </div>
        <div className="col-sm-6" id="cardCol">
          <BookingVenue venue={this.props.venue} />
        </div>
      </div>
    );
  }
}
