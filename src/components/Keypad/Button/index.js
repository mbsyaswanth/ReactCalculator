import React, { Component } from "react";
import { StyleButton } from "./styledComponents";
class Button extends Component {
  handleClick = event => {
    const { displayText, action } = this.props;
    const specialButtons = ["Del", "c", "="];
    if (specialButtons.includes(displayText)) {
      action();
      return;
    }
    action(event.target.value);
  };
  render() {
    const { displayText } = this.props;
    return (
      <div>
        <StyleButton
          type="button"
          onClick={this.handleClick}
          value={displayText}
        />
      </div>
    );
  }
}

export default Button;
