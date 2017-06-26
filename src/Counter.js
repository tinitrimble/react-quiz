import React, { Component } from 'react';

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  }
  render() {
    return {count}
  }
}

export default Counter;
