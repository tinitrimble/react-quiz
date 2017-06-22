import React, { Component } from 'react';
import Question from './Question.js';
import questionData from './multipleQuestions.json';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  getInitialState() {
    this.state = {
      count: 0
    }
  }
  handleClick(answer) {
    if (this.answer.correct) {
      this.setState({
        count: this.state.count + 1
      })
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">This is my test space.</p>
        <div class="counter">
          <p>Total Correct: {this.state.count}</p>
        </div>
        <div class="use-the-question-component-from-line-23-here-instead">
          {questionData.map((question) =>
            <Question
              text={question.text}
              picture={question.picture}
              answers={question.answers} />
          )}
        </div>
      </div>
    )}
}

export default App;
