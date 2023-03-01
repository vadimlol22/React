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

  componentDidUpdate() {
    if (this.state.countValue % 2 === 0 && this.state.isEven !== true) {
      this.setState({ isEven: true });
    }
    if (this.state.countValue % 2 !== 0 && this.state.isEven !== false) {
      this.setState({ isEven: false });
    }
  }

  handleIncrement = () => {
    this.setState({ countValue: this.state.countValue + 1 });
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  handleSubtraction = () => {
    this.setState((prevstate) => {
      if (prevstate.countValue - 1 < 0) {
        return { countValue: prevstate.countValue - 1 };
      }
    });
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
