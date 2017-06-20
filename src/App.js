import React, { Component } from 'react';
import Question from './Question.js';
import questionData from './multipleQuestions.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">This is my test space.</p>
        {questionData.map((question, index) =>
          <Question
            key={index}
            text={question.text}
            picture={question.picture}
            answers={question.answers}
          />
        )}
      </div>
    );
  }
}

export default App;
