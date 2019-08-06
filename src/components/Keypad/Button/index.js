import React, { Component } from "react";

class Button extends Component {
  handleClick = event => {
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
