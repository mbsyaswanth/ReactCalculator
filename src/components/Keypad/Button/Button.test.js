import { render, fireEvent } from "@testing-library/react";
import CalculatorStore from "../../../store/CalculatorStore";
import React from "react";
import Button from "./index";

let store;
beforeEach(() => {
  store = new CalculatorStore();
});

describe("Button component", () => {
  it("should test if the function is called on click", () => {
    const spyFunc = jest.fn();
    const { getByText } = render(<Button action={spyFunc} displayText="1" />);
    fireEvent.click(getByText("1"));
    expect(spyFunc).toBeCalled();
    expect(spyFunc).toBeCalledWith("1");
  });

  it("should call without parameters for values Del,c,=", () => {
    const spyFunc = jest.fn();
    const { getByText, rerender } = render(
      <Button action={spyFunc} displayText="Del" />
    );
    fireEvent.click(getByText("Del"));
    expect(spyFunc).toBeCalledWith();
    rerender(<Button action={spyFunc} displayText="c" />);
    fireEvent.click(getByText("c"));
    expect(spyFunc).toBeCalledWith();
    rerender(<Button action={spyFunc} displayText="=" />);
    fireEvent.click(getByText("="));
    expect(spyFunc).toBeCalledWith();
  });
});
