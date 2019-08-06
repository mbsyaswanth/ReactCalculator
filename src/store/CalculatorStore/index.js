import { observable, action, computed } from "mobx";

class CalculatorStore {
  @observable inputExpression = "";
  @observable evaluatedResult = "";
  @action.bound addToExpression(input) {
    if (this.isValidInput(input)) {
      this.inputExpression = this.inputExpression.concat(input);
    } else {
      this.deleteLastCharInExpression();
      this.inputExpression = this.inputExpression.concat(input);
    }
  }

  @action.bound clearExpression() {
    this.inputExpression = "";
  }

  @action.bound deleteLastCharInExpression() {
    this.inputExpression = this.inputExpression.slice(0, -1);
  }

  @computed get lastEnteredInput() {
    return this.inputExpression[this.inputExpression.length - 1];
  }

  @action.bound result() {
    try {
      this.evaluatedResult = eval(this.inputExpression);
    } catch {
      this.evaluatedResult = eval(this.inputExpression);
    }
  }

  isValidInput = input => {
    const operators = ["+", "-", "*", "/", "%"];
    if (
      operators.includes(input) &&
      operators.includes(this.lastEnteredInput)
    ) {
      return false;
    }
    return true;
  };
}

export default CalculatorStore;
