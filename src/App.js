import React, { Component } from 'react';
import Question from './Question.js';
import questionData from './multipleQuestions.json';
import logo from './q2.svg';
import './App.css';
import possibleResults from './possibleResults.json';
import Results from './Results.js';

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
  getResults() {
    const totalQuestions = questionData.length;
    const totalAnswered = this.state.userAnswers.length;
    if ( totalAnswered === totalQuestions ) {
      const score = this.getCorrectAnswerCount() / totalQuestions;
      const resultNumber = Math.round((possibleResults.length - 1) * score);
      return <Results
        headline={possibleResults[resultNumber].headline}
        resultpic={possibleResults[resultNumber].resultpic}
        summary={possibleResults[resultNumber].summary} />
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Quizzlydoo</h2>
        </div>
        <div className="quiz-title">
          <h1>How well do you know Twin Peaks?</h1>
      </div>
        <div className="counter">
          <p>Score: </p> {this.getCorrectAnswerCount()}
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
        {this.getResults()}
      </div>
    )}
}

export default App;
