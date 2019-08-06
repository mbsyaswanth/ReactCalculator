import React, { Component } from "react";
import { Input } from "./styledComponents";

class CalculatorInput extends Component {
  render() {
    return <Input>{this.props.input}</Input>;
  }
}

export default CalculatorInput;
