import { observable, action, computed } from "mobx";

class CalculatorStore {
  @observable inputExpression = "";

  @action.bound addToExpression(input) {
    this.inputExpression = this.inputExpression.concat(input);
  }

  @action.bound clearExpression() {
    this.inputExpression = "";
  }

  @action.bound deleteLastCharInExpression() {
    this.inputExpression = this.inputExpression.slice(0, -1);
  }

  @computed get lastEnteredInput() {
    return parseInt(this.inputExpression[this.inputExpression.length - 1]);
  }

  result = () => {
    return eval(this.inputExpression);
  };
}

export default CalculatorStore;
