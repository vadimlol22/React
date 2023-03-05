import { Component } from "react";

import { CounterView } from "../component/CounterView";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.countValue !== this.state.countValue) {
      this.setState({ isEven: this.state.countValue % 2 === 0 });
    }
  }

  handleIncrement = () => {
    this.setState({ countValue: this.state.countValue + 1 });
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  handleSubtraction = () => {
    if (this.state.countValue > 0) {
      this.setState({ countValue: this.state.countValue - 1 });
    }
  };

  render() {
    return (
      <CounterView
        counterValue={this.state.countValue}
        isEven={this.state.isEven}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
        handleSubtraction={this.handleSubtraction}
      />
    );
  }
}

export default CounterContainer;
