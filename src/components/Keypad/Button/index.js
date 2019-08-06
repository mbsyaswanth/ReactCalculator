import React, { Component } from "react";

class Button extends Component {
  render() {
    const { action, displayText } = this.props;
    return (
      <div>
        <input type="button" onClick={action} value={displayText} />
      </div>
    );
  }
}

export default Button;
