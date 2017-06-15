import React, { Component } from 'react';
import './Question.css';
import PropTypes from 'prop-types';

class Question extends Component {
  propTypes = {
    question: PropTypes.string.isRequired,
    picture: PropTypes.string,
    answers: PropTypes.shape ({
      option: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired
    })
  }
  handleClick () {
    if (this.answer.correct) {
      alert('this is correct!')
    }
    else {
      alert('this is so wrong!')
    }
  }
  render() {
    return (
      <div className="question">
        <h3>{this.props.question}</h3>
        <img src={this.props.picture}/>
        <div className="possible-choices">
          {Question.answers.map((answer) => 
            <button
            className="does-this-work"
            onClick={this.handleClick}>
            </button>
          )}
      </div>
      </div>
    );
  }
  }


  export default Question;
