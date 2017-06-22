import React, { Component } from 'react';
import './Question.css';
import PropTypes from 'prop-types';

class Question extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    picture: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      option: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired
    }))
  }
  handleClick(answer) {
    const itsRight = answer.correct;
    if (itsRight) {
      alert('this is correct!')
    } else {
      alert('this is so wrong!')
    }
  }
  render() {
    return (
      <div className="question">
        <h3>{this.props.text}</h3>
        <img src={this.props.picture} alt="" />
        <div className="possible-choices">
          {this.props.answers.map((answer, index) =>
            <button
              key={index}
              className="does-this-work"
              onClick={() => this.handleClick(answer)} >
              {answer.option}
            </button>
          )}
        </div>
      </div>
    );
  }
}


export default Question;
