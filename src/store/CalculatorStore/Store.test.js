import CalculatorStore from "./index";

let store;
beforeEach(() => {
  store = new CalculatorStore();
});

describe("Calculator Store", () => {
  it("should test if addToExpression successfully adds input to inputExpression observable ", () => {
    expect(store.inputExpression).toBe("");
    store.addToExpression("1");
    expect(store.inputExpression).toBe("1");
    store.addToExpression("*");
    store.addToExpression("-");
    expect(store.inputExpression).toBe("1-");
  });

  it("should should test if clearExpression clears the inputExpression", () => {
    store.addToExpression("12*3");
    store.result();
    store.clearExpression();
    expect(store.inputExpression).toBe("");
    expect(store.evaluatedResult).toBe("");
  });

  it("should test if last entered input returns correctly", () => {
    store.addToExpression("1+56");
    expect(store.lastEnteredInput).toBe("6");
  });

  it("should delete last char entered in input", () => {
    store.addToExpression("1+56");
    store.deleteLastCharInExpression();
    expect(store.inputExpression).toBe("1+5");
  });

  it("should compute and return the result of the expression", () => {
    store.addToExpression("1+55*2");
    store.result();
    expect(store.evaluatedResult).toBe(111);
  });

  it("should check isvalid input function is working properly", () => {
    store.addToExpression("1+55*");
    expect(store.isValidInput("-")).toBe(false);
    expect(store.isValidInput("5")).toBe(true);
    expect(store.isValidInput("*")).toBe(false);
  });
});
