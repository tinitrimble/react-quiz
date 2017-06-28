import React, { Component } from 'react';
import Question from './Question.js';
import questionData from './multipleQuestions.json';
import logo from './logo.svg';
import './App.css';
// import Results from './Results.js';

class App extends Component {
  constructor() {
    super ();
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }
  componentWillMount() {
    this.setState({
      correctAnswers: 0,
      userAnswers: [],
      currentQuestion: 0 
    })
  }
  handleAnswerSelected(answer) {
    //const newUserAnswers[] = this.state.userAnswers.slice();
    const itsRight = answer.correct;
    if (itsRight) {
      console.log(answer)
      this.setState({
        correctAnswers: this.state.correctAnswers + 1,
      })
    }
    else {
      console.log(answer)
    }
    this.setState({
      userAnswers: this.state.userAnswers.push(answer)
      // userAnswers: newUserAnswers[answer],  
      currentQuestion: this.state.currentQuestion + 1
    })
    console.log(this.state.userAnswers);
    //if (this.state.userAnswers.length === questionNumber) {
    //  return (
    //  <div className="here-are-results">
    //    <Results /> 
    //  </div>
    //  )} 
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
          <p>Total correct: </p> {this.state.correctAnswers}
        </div>
        <div className="use-the-question-component-from-line-23-here-instead">
          {questionData.map((question, index) =>
            <Question
              key={index}
              questionNumber={index}
              text={question.text}
              picture={question.picture}
              answers={question.answers}
              onClick={this.handleAnswerSelected} />
          )}
        </div>
      </div>
    )}
}

export default App;
