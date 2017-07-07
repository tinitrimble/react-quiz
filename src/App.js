import React, { Component } from 'react';
import Question from './Question.js';
import questionData from './multipleQuestions.json';
import logo from './logo.svg';
import './App.css';
import possibleResults from './possibleResults.json';

class App extends Component {
  constructor() {
    super ();
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }
  componentWillMount() {
    this.setState({
      correctAnswers: 0,
      userAnswers: [],
    })
  }
  handleAnswerSelected(answer, questionNumber) {
    const updatedUserAnswers = this.state.userAnswers.slice();
    updatedUserAnswers[questionNumber] = answer
    this.setState({
      userAnswers: updatedUserAnswers
    });
  }
  getCorrectAnswerCount() {
    return this.state.userAnswers
      .filter(answer => answer.correct)
      .length;
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
          <p>Total correct: </p> {this.getCorrectAnswerCount()}
        </div>
        <div className="use-the-question-component-from-line-23-here-instead">
          {questionData.map((question, index) =>
            <Question
              key={index}
              questionNumber={index}
              text={question.text}
              picture={question.picture}
              answers={question.answers}
              onClick={this.handleAnswerSelected} 
              userAnswer={this.state.userAnswers[index]}/> 
          )}
        </div>
        {this.state.completed &&
            <div className="you-did-it">
            </div>
        }
      </div>
    )}
}

export default App;
