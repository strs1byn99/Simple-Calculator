import React, { Component } from "react";
import "./styles.css";

class Input extends Component {
  render() {
    return (
      <div className="monitor">
        {this.props.input}
      </div>
    );
  }
}

export default Input;
