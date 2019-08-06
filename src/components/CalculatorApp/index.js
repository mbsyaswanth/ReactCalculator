import React, { Component } from "react";
import Keypad from "../Keypad";
import CalculatorStore from "../../store/CalculatorStore";

const store = new CalculatorStore();

class CalculatorApp extends Component {
  render() {
    return (
      <div>
        <Keypad store={store} />
      </div>
    );
  }
}

export default CalculatorApp;
