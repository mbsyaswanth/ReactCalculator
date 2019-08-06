import React, { Component } from "react";
import { ResultContainer } from "./styledComponents";

class Result extends Component {
  render() {
    return <ResultContainer>{this.props.result}</ResultContainer>;
  }
}

export default Result;
