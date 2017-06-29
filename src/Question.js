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
    userHasAnswered: PropTypes.bool.isRequired
  }
  getQuestionClassName() {
    const questionClassName = {
      correct ? 'answered' : 'wrong-answer'
    }
    if (this.props.userHasAnswered) {
      return {questionClassName};
    } else {
      return 'question';
    }
  }
  render() {
    return (
      <div className={this.getQuestionClassName} >
        <h3>{this.props.text}</h3>
        <img src={this.props.picture} alt="" />
        <div className="possible-choices">
          {this.props.answers.map((answer, index) =>
            <button
              key={index}
              className="does-this-work"
              onClick={() => this.props.onClick(answer, this.props.questionNumber)}
              disabled={this.props.userHasAnswered}>
              {answer.option}
            </button>
          )}
        </div>
      </div>
    );
  }
}


export default Question;
