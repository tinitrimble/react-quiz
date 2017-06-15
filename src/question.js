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
  Choices(answers) {
    const answer = this.props.answers;
    const listAnswers = answer.map((answer) =>
      <button 
        className="does-this-work"
        onClick={this.handleClick} >
        {listAnswers.string} 
      </button>
    )}
  handleClick() {
    if (this.answer.correct) {
      alert('this is correct!')
    } else {
      alert('this is so wrong!')
    }
  }
  render() {
    return (
      <div className="question">
        <h3>{this.props.question}</h3>
        <img src={this.props.picture}/>
        <div className="possible-choices">
          {this.Choices}
          {this.Choices}
          {this.Choices}
          {this.Choices}
        </div>
      </div>
    );
  }
}


export default Question;
