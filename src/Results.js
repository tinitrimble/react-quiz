import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  static propTypes = {
    score: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    resultpic: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div className="result-box" >
        <h1>You scored: {this.props.score}</h1>
        <h2>{this.props.headline}</h2>
        <img src={this.props.resultpic} />
        <p>{this.props.summary}</p>
        <div className= "share-this">
          <a href="www.google.com">Share your result with your friends!</a>
          <img src="https://www.butsch-meier.de/wp-content/uploads/facebook-footer.png" href="www.facebook.com" />
        </div>
      </div>
    )
  }
}

export default Results;