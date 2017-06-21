import React, { Component } from 'react';
import Question from './question.js';
import logo from './logo.svg';
import './App.css';
import questionData from './multipleQuestions.json';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">This is my test space.</p>
        <div class="use-the-question-component-from-line-23-here-instead">
          {questionData.map((question) =>
            <Question
              question={question.question}
              picture={question.picture}
              answers={question.answers} />
          )}
        </div>
      </div>
  )}
}

export default App;
