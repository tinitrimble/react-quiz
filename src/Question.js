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
    })),
    onClick: PropTypes.func.isRequired,
    questionNumber: PropTypes.number.isRequired,
    userAnswer: PropTypes.bool
  }
  getQuestionClassName() {
    const itsright =
      if (userAnswer && this.props.answers.correct) {
        userAnswer = true;
      } else {
        userAnswer = false;
      }
    if (this.props.userAnswer && itsright) {
      console.log('answer');
    } else if (this.props.userAnswer && !(this.props.userAnswer.correct)) {
      console.log('wrong-answer');
    } else {
      console.log('question');
    }
  }
  render() {
    return (
      <div className={this.getQuestionClassName()} >
        <h3>{this.props.text}</h3>
        <img src={this.props.picture} alt="" />
        <div className="possible-choices">
          {this.props.answers.map((answer, index) =>
            <button
              key={index}
              className="does-this-work"
              onClick={() => this.props.onClick(answer, this.props.questionNumber)}
              disabled={!!this.props.userAnswer}>
              {answer.option}
            </button>
          )}
        </div>
      </div>
    );
  }
}


export default Question;
