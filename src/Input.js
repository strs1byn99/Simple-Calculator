import React, { Component } from "react";
import "./styles.css";

class Input extends Component {
  render() {
    return (
      <div className="monitor">
        <span className="value">
          {this.props.input}
        </span>
      </div>
    );
  }
}

export default Input;
