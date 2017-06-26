import React, { Component } from 'react';
import Question from './Question.js';
import questionData from './multipleQuestions.json';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';

class App extends Component {
  constructor(props) {
    super(props);
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
        <div class="counter">
          <p>Total correct: </p>
          <Counter  />
        </div>
        <div class="use-the-question-component-from-line-23-here-instead">
          {questionData.map((question) =>
            <Question
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
