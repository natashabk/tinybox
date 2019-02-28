import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";

export default class CardContainer extends Component {
  displayPageNumbers() {
    const items = [];
    for (let i = 1; i < this.props.pages; i++) {
      console.log(i);
      items.push(
        <Pagination.Item key={i} active={i === this.props.active}>
          {i}
        </Pagination.Item>
      );
    }
    return items;
  }

  render() {
    return (
      <Pagination>
        <Pagination.Prev onClick={this.props.prevPage}/>
        {this.displayPageNumbers()}
        <Pagination.Next onClick={this.props.nextPage}/>
      </Pagination>
    );
  }
}
