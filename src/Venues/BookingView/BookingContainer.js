import React, { Component } from "react";
import "../../Styling/Booking.scss";
import BookingVenue from "./BookingVenue";
import BookingInfoCard from "./BookingInfoCard";
import Button from "react-bootstrap/Button";
import { ListUnorderedIcon } from "react-octicons";

export default class Booking extends Component {
  render() {
    // const venue = {
    //   address1: "Charlemont Place",
    //   city: "Dublin",
    //   favorite: true,
    //   id: "8530fb7d-9942-4fb7-bf17-8999bce54dee",
    //   imgURL: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    //   listing_text:
    //     "Overlooking the historic Grand Canal, the Hilton Dublin hotel is a 10-minute walk from the fashionable Dublin City Center and three miles away from the RDS Convention Center. The hotel has 8 meeting r…",
    //   name: "Hilton Dublin",
    //   postcode: ""
    // };

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
