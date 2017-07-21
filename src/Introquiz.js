import React, { Component } from 'react';
import './Introquiz.css';
import PropTypes from 'prop-types';

class Introquiz extends Component {
  static propTypes = {
    quiztitle: PropTypes.string.isRequired,
    intropic: PropTypes.string,
    quizsummary: PropTypes.string
  }
  render() {
    return (
        <div className="quiz-title">
          <h1>{this.props.quiztitle}</h1>
          <img src={this.props.intropic}  className="Quiz-pic" />
          {this.props.quizsummary}
          <button className="begin-quiz">Begin Quiz</button> 
        </div>
    )
  }
}

import scrollToElement from 'scroll-to-element';




