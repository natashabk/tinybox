import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DateTimePickers from "./DateTimePickers";

export default class BookingInfoCard extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    guests: 0,
    confirmed: false
  };

  changeStart = startDate => this.setState({ startDate });
  changeEnd = endDate => this.setState({ endDate });

  title() {
    return this.state.confirmed ?
      "Confirmed!" : "Ready to Book?"
  }

  details() {
    return this.state.confirmed ?
    <div>
    <p>You're going to:</p>
    <h4>{this.props.venue.name}</h4>
    <p>{this.state.startDate.toDateString()}</p>
    </div>
    :
    <DateTimePickers 
      changeStart={this.changeStart}
      changeEnd={this.changeEnd}
      startDate={this.state.startDate}
      endDate={this.state.endDate}
    />
  }

  guestFormDisplay() {
    return this.state.confirmed ?
      "noInput" : "guestInput" 
  }

  guestCountDisplay() {
    return this.state.confirmed ?
      this.state.guests:null
  }

  buttonText() {
    return this.state.confirmed ?
      "Edit Event" : "Confirm Booking"
  }

  confirm =(e)=> {
    e.preventDefault();
    this.setState({
      confirmed: !this.state.confirmed
    })
  }

  guestChange=(e) => {
    e.preventDefault();
    this.setState({
      guests: e.target.value
    })
  }

  render() {
    return (
      <div className="datepicker">
        <h2 id="bookHeader">{this.title()}</h2>
        {this.details()}
        <div id="bookForm">
          <h4>Expected guests:{this.guestCountDisplay()}</h4>
          <Form onSubmit={this.confirm}>
            <Form.Group id="guests">
              <div id="guests">
                <Form.Control
                  id={this.guestFormDisplay()}
                  type="number"
                  placeholder="50"
                  min="1"
                  onChange={this.guestChange}
                />
                <Button variant="primary" type="submit">
                  {this.buttonText()}
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
