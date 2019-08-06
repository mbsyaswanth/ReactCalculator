import React, { Component } from "react";
import { keys } from "../../constants";
import Button from "./Button";
import { KeysContainer } from "./styledComponents";

class Keypad extends Component {
  render() {
    const {
      addToExpression,
      clearExpression,
      result,
      deleteLastCharInExpression
    } = this.props.store;
    return (
      <KeysContainer>
        {keys.map(key => {
          switch (key) {
            case "Del":
              return (
                <Button
                  key={key}
                  action={deleteLastCharInExpression}
                  displayText={key}
                />
              );

            case "c":
              return (
                <Button key={key} action={clearExpression} displayText={key} />
              );

            case "=":
              return <Button key={key} action={result} displayText={key} />;

            default:
              return (
                <Button key={key} action={addToExpression} displayText={key} />
              );
          }
        })}
      </KeysContainer>
    );
  }
}

export default Keypad;
