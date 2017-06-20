import React, { Component } from 'react';
import Question from './Question.js';
import questionData from './multipleQuestions.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // check your browser console to see what's in questionData
    // Once you don't need this anymore delete the constructor
    console.log(questionData);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">This is my test space.</p>
        <Question question={questionData.question} picture={questionData.picture} answers={questionData.answers} />
      </div>
    );
  }
}

export default App;
