import React, { Component } from 'react';
import Question from './Question.js';
import questionData from './multipleQuestions.json';
import logo from './logo.svg';
import './App.css';

// try moving this into the render function
questionData.map(question =>
  <div class="need-a-div-name">
    <Question question={question.question} picture={question.picture} answers={question.answers} />
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">This is my test space.</p>
        {questionData.map(question =>
          <div class="need-a-div-name">
            <Question question={question.question} picture={question.picture} answers={question.answers} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
