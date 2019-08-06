import { observable, action, computed } from "mobx";

class CalculatorStore {
  @observable inputExpression = "";

  @action.bound addToExpression(input) {
    this.inputExpression = this.inputExpression.concat(input);
  }
}

export default CalculatorStore;
