import React, { Component } from 'react';
import Question from './question.js';
import logo from './logo.svg';
import './App.css';


const questionData = {
  question: 'What is the capital of France?',
  picture: 'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/seine-nuit-%7C-740x380-%7C-%C2%A9-thinkstock/12354-3-fre-FR/Seine-nuit-%7C-740x380-%7C-%C2%A9-Thinkstock.jpg',
  answers: [
    {
      option: 'London',
      correct: false
    },
    {
      option: 'Paris',
      correct: true
    },
    {
      option: 'Rome',
      correct: false
    },
    {
      option: 'Berlin',
      correct: false
    }
  ]
};

class App extends Component {
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
