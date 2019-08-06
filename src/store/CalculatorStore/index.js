import { observable, action, computed } from "mobx";

class CalculatorStore {
  @observable inputExpression = "";

  @action.bound addToExpression(input) {
    this.inputExpression = this.inputExpression.concat(input);
  }

  @action.bound clearExpression() {
    this.inputExpression = "";
  }

  @computed get lastEnteredInput() {
    return parseInt(this.inputExpression[this.inputExpression.length - 1]);
  }
}

export default CalculatorStore;
