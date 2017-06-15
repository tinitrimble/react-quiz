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
<<<<<<< HEAD
          {Question.answers.map((answer) => 
=======
          { this.answers.map(answer => {
>>>>>>> 40db4c1f5f7f9a1842181e5cb58ad2e77c4ab3d3
            <button
            className="does-this-work"
            onClick={this.handleClick}>
            </button>
<<<<<<< HEAD
          )}
=======
          }) }
>>>>>>> 40db4c1f5f7f9a1842181e5cb58ad2e77c4ab3d3
      </div>
      </div>
    );
  }
}


export default Question;
