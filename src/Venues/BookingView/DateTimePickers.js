import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";


export default class DateTimePickers extends Component{
  
  render() {
    return (
      <div>
        <div id="bookForm">
          <h4>Event starts:</h4>
          <DateTimePicker
            onChange={this.props.changeStart}
            value={this.props.startDate}
            disableClock={true}
            clearIcon={null}
          />
        </div>
        <div id="bookForm">
          <h4>Event ends:</h4>
          <DateTimePicker
            onChange={this.props.changeEnd}
            value={this.props.endDate}
            disableClock={true}
            clearIcon={null}
          />
        </div>
      </div>
    );
  }
}
