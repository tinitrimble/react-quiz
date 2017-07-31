import React, { Component } from 'react';
import Introquiz from './Introquiz.js';
import Counter from './Counter.js';
import Question from './Question.js';
import logo from './q2.svg';
import './App.css';
import quizInfo from './quiz.json';
import Results from './Results.js';
import Adbox from './Adbox.js';
import Adboxtwo from './Adboxtwo.js';

class App extends Component {
  constructor() {
    super ();
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
    this.handleQuizStart = this.handleQuizStart.bind(this)
  }
  componentWillMount() {
    this.setState({
      correctAnswers: 0,
      userAnswers: [],
      showIntro: true
    })
  }
  handleQuizStart() {
    this.setState({ showIntro: false })
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
    const isQuizIntro = this.state.showIntro;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="page-name">Quizzelydoo</h2>
        </div>
        {isQuizIntro ? (
          <div className="Introduction">
            <Adbox />
            <Introquiz
              quiztitle={quizInfo.quizheadline.quiztitle}
              intropic={quizInfo.quizheadline.intropic}
              quizsummary={quizInfo.quizheadline.quizsummary}
              onClick={this.handleQuizStart}/>
            <Adboxtwo />
          </div>
        ) : (
          <div className="Quiz-Display">
            <Counter
              totalscore={this.getCorrectAnswerCount()} 
              className="counterpos" />
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
        )}
        {this.getResults()}
      </div>
    )
  }
}

export default App;
