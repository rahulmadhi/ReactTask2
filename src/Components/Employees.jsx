import React, { Component } from "react";
import Employee from "./Employee";

export default class Employees extends Component {
  render() {
    return <Employee emp={this.props.empDetails1} />;
  }
}
