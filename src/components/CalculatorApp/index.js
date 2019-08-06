import React, { Component } from "react";
import Keypad from "../Keypad";
import CalculatorStore from "../../store/CalculatorStore";
import Result from "../Result";
import { CalculatorContainer } from "./styledComponents";
import { observer } from "mobx-react";
import { observable } from "mobx";

const store = new CalculatorStore();
@observer
class CalculatorApp extends Component {
  render() {
    return (
      <CalculatorContainer>
        {/* <Result result={store.result} /> */}
        <Keypad store={store} />
      </CalculatorContainer>
    );
  }
}

export default CalculatorApp;
