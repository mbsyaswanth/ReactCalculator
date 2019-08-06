import React, { Component } from "react";

class Button extends Component {
  handleClick = event => {
    const specialButtons = ["Del", "c", "="];
    if (specialButtons.includes(this.props.displayText)) {
      this.props.action();
      return;
    }
    this.props.action(event.target.value);
  };
  render() {
    const { action, displayText } = this.props;
    return (
      <div>
        <input type="button" onClick={this.handleClick} value={displayText} />
      </div>
    );
  }
}

export default Button;
