import React, { Component } from 'react';
import Question from './Question.js';
import questionData from './multipleQuestions.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.setState({
      correctAnswers: 0
    })
  }
  handleAnswerSelected(answer) {
    const itsRight = answer.correct;
    if (itsRight) {
      alert("Thumbs up! Damn good answer!");
      this.setState({
        correctAnswers: this.state.count + 1
      })
    }
    else {
      alert("My log says you are wrong");
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">This is my test space.</p>
        <div className="counter">
          <p>Total correct: </p> {this.correctAnswers} 
        </div>
        <div className="use-the-question-component-from-line-23-here-instead">
          {questionData.map((question, index) =>
            <Question
              key={index}
              text={question.text}
              picture={question.picture}
              answers={question.answers}
              onClick={() => this.handleAnswerSelected} />
          )}
        </div>
      </div>
    )}
}

export default App;
