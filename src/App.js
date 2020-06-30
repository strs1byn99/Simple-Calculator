import React, { Component } from "react";
import "./styles.css";
import Input from "./Input.js";

const oragneBtn = { backgroundColor: "orange" };
const grayBtn = { backgroundColor: "gray" };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      previousInput: 0,
      operator: "",
      decimal: false
    };
  }

  clearInput() {
    console.log("AC");
    this.setState({ input: 0 });
  }

  changeSign() {
    console.log("+/-");
    this.setState({ input: this.state.input * -1 });
  }

  percentage() {
    console.log("percentage");
    this.setState({ input: this.state.input / 100 });
  }

  addToInput(n) {
    console.log(n);
    this.state.decimal
      ? this.setState({ input: this.state.input + n * 0.1 })
      : this.setState({ input: this.state.input * 10 + n });
  }

  add() {
    console.log("add");
    this.setState({ previousInput: this.state.input, operator: "add" });
    this.setState({ input: "", decimal: false });
  }

  minus() {
    console.log("minus");
    this.setState({ previousInput: this.state.input, operator: "minus" });
    this.setState({ input: "", decimal: false });
  }

  multiply() {
    console.log("multiple");
    this.setState({ previousInput: this.state.input, operator: "multiply" });
    this.setState({ input: "", decimal: false });
  }

  divide() {
    console.log("divide");
    this.setState({ previousInput: this.state.input, operator: "divide" });
    this.setState({ input: "", decimal: false });
  }

  equal() {
    console.log("equal");
    var curr = this.state.input;
    if (this.state.operator === "add") {
      this.setState({ input: this.state.previousInput + curr });
    } else if (this.state.operator === "minus") {
      this.setState({ input: this.state.previousInput - curr });
    } else if (this.state.operator === "multiply") {
      this.setState({ input: this.state.previousInput * curr });
    } else if (this.state.operator === "divide") {
      this.setState({ input: this.state.previousInput / curr });
    }
    this.setState({ previousInput: "", decimal: false, operator: "" });
  }

  dot() {
    console.log("dot");
    this.setState({ decimal: true });
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <Input input={this.state.input} />
        </div>
        <div className="row">
          <button onClick={this.clearInput.bind(this)} style={grayBtn}>
            AC
          </button>
          <button onClick={this.changeSign.bind(this)} style={grayBtn}>
            +/-
          </button>
          <button onClick={this.percentage.bind(this)} style={grayBtn}>
            %
          </button>
          <button onClick={this.divide.bind(this)} style={oragneBtn}>
            /
          </button>
        </div>
        <div className="row">
          {/* alt: <button onClick={this.addToInput.bind(this, 7)}>7</button> */}
          <button onClick={e => this.addToInput(7, e)}>7</button>
          <button onClick={e => this.addToInput(8, e)}>8</button>
          <button onClick={e => this.addToInput(9, e)}>9</button>
          <button onClick={e => this.multiply(e)} style={oragneBtn}>
            *
          </button>
        </div>
        <div className="row">
          <button onClick={e => this.addToInput(4, e)}>4</button>
          <button onClick={e => this.addToInput(5, e)}>5</button>
          <button onClick={e => this.addToInput(6, e)}>6</button>
          <button onClick={e => this.minus(e)} style={oragneBtn}>
            -
          </button>
        </div>
        <div className="row">
          <button onClick={e => this.addToInput(1, e)}>1</button>
          <button onClick={e => this.addToInput(2, e)}>2</button>
          <button onClick={e => this.addToInput(3, e)}>3</button>
          <button onClick={e => this.add(e)} style={oragneBtn}>
            +
          </button>
        </div>
        <div className="row">
          <button className="zero" onClick={e => this.addToInput(0, e)}>
            0
          </button>
          <button onClick={e => this.dot(e)}>.</button>
          <button onClick={e => this.equal(e)} style={oragneBtn}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
