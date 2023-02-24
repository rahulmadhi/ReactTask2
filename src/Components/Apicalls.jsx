import React, { Component } from "react";

import Employees from "./Employees";
import JSON from "./Task.json";

class Apicalls extends Component {
  state = {
    empDetails: JSON,
  };
  render() {
    return (
      <div>
        {/* <Employee empDetails={this.state} /> */}
        <Employees empDetails1={this.state.empDetails} />
      </div>
    );
  }
}

export default Apicalls;
