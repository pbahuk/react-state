import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    });
    console.log(this.state.counter);
  };

  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  resetCounetr = () => {
    this.setState({
      counter: 0
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <div> Counter value: {counter}</div>
        <button onClick={this.incrementCounter}> Increment </button>
        <button onClick={this.decrementCounter}> Decrement </button>
        <button onClick={this.resetCounetr}> Reset </button>
      </div>
    );
  }
}

export default Counter;
