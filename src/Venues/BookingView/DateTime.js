import React, { Component } from "react";
import DateTimePicker from 'react-datetime-picker'
import Button from "react-bootstrap/Button";


export default class DateTime extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date()
  }
  
  changeStart = startDate => this.setState({ startDate })
  changeEnd = endDate => this.setState({ endDate })

  
  render () {
    return (
      <div className="datepicker">
      <h2 id="bookHeader">Ready to book?</h2>
      <div>
        <h4>Event starts:</h4>
          <DateTimePicker 
            onChange={this.changeStart}
            value={this.state.startDate}
            disableClock={true}
            clearIcon={null}
            />
      </div>
      <div>
        <h4>Event ends:</h4>
          <DateTimePicker 
            onChange={this.changeEnd}
            value={this.state.endDate}
            />
      </div>
      </div>
    )
  }
}