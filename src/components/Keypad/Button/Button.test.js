import { render, fireEvent } from "@testing-library/react";
import CalculatorStore from "../../../store/CalculatorStore";
import React from "react";

let store;
beforeEach(() => {
  store = new CalculatorStore();
});

describe("Button component", () => {
  it("should test ", () => {
    const spyFunc = jest.fn();
    const { getByText } = render(<Button action={spyFunc} displayText="1" />);
    fireEvent.click(getByText("1"));
    expect(spyFunc).toBeCalled();
  });
});
