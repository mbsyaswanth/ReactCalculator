let store;
beforeEach(() => {
  store = new CalculatorStore();
});

describe("Calculator Store", () => {
  it("should test if addToExpression successfully adds input to inputExpression observable ", () => {
    expect(store.inputExpression).toBe("");
    store.addToExpression("1");
    expect(store.inputExpression).toBe("1");
  });
});
