import React, { Component } from 'react';
import './Question.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    return classNames({
      question: true,
      rightAnswer: (this.props.userAnswer && (this.props.answers.correct = true)) ? true : false,  
      wrongAnswer: (this.props.userAnswer && (this.props.answers.correct = false)) ? true : false 
    });
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
