import { connect } from "react-redux";

import React, { PureComponent } from "react";
import { increaseCounter } from "../store/counter/actions";

class CounterButtonComponent extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={this.props.increaseCounter}>Increase Counter ({this.props.value})</button>
      </div>
    );
  }
}

export const CounterButton = connect(
  (state) => ({
      value: state.counter.value,
  }),
  { increaseCounter }
)(CounterButtonComponent);
