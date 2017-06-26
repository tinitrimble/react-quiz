import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.setState({
      correctAnswers: 0
    })
  }
}

export default Counter;
