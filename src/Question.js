import React, { Component } from 'react';
import './Question.css';
import PropTypes from 'prop-types';

class Question extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    picture: PropTypes.string,
    answers: PropTypes.shape({
      option: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired
    })
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
        {this.props.question.map((question, picture, answer) =>
          <h3>{question}</h3>
          <img src={picture} alt="" />
          <button
            className="does-this-work"
            onClick={() => this.handleClick(answer)} >
            {answer.option}
          </button>
        )}
      </div>
    )}

}


export default Question;
