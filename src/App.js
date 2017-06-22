import React, { Component } from 'react';
import Question from './Question.js';
import questionData from './multipleQuestions.json';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';

class App extends Component {
  getInitialState() {
    return { count: 0 };
  }
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.answer.correct) {
      this.setState = ({count + 1 })
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
              count={this.handleAnswerSelected} />
          )}
        </div>
      </div>
    )}
}

export default App;
