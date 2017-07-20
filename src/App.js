import React, { Component } from 'react';
import Question from './Question.js';
import logo from './q2.svg';
import './App.css';
import quizInfo from './quiz.json';
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
    const totalQuestions = quizInfo.questions.length;
    const totalAnswered = this.state.userAnswers.length;
    if ( totalAnswered === totalQuestions ) {
      const score = this.getCorrectAnswerCount() / totalQuestions;
      const resultNumber = Math.round((quizInfo.results.length - 1) * score);
      return <Results
        headline={quizInfo.results[resultNumber].headline}
        resultpic={quizInfo.results[resultNumber].resultpic}
        summary={quizInfo.results[resultNumber].summary} />
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Quizzelydoo</h2>
        </div>
        <div className="quiz-title">
          <h1>How well do you know Twin Peaks?</h1>
        </div>
        <div className="counter">
          <p>Score: </p> {this.getCorrectAnswerCount()}
        </div>
        <div className="question-div">
          {quizInfo.questions.map((question, index) =>
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
        <div className="results">
          {this.getResults()}
        </div>
      </div>
    )}
}

export default App;
