import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
  componentWillMount () {
    this.pics = [
      'https://www.sfatulmamicilor.ro/uploads/articles/bentita-nasturi-par-forme.jpg',
      'https://theibtaurisblog.files.wordpress.com/2012/01/vintage-buttons_1.jpg',
      'https://img1.etsystatic.com/157/0/5178785/il_340x270.1217995153_bqmw.jpg',
      'https://www.craftstylish.com/assets/uploads/posts/42688/dorset_buttons20_lg.jpg'
    ];
  }
  handleClick () {
    alert('this is a test');
  }
  getRandomPictureURL () {
    const randomPictureIndex = Math.floor(Math.random() * this.pics.length);
    return this.pics[randomPictureIndex];
  }
  render() {
    return (
      <div className="question">
        <h3>{this.props.question}</h3>
        <img src={this.getRandomPictureURL()} />
        <div className="possible-choices">
          <button className="does-this-work" onClick={this.handleClick}>{this.props.answer}</button>
          <button className="does-this-work" onClick={this.handleClick}>{this.props.answer}</button>
          <button className="does-this-work" onClick={this.handleClick}>{this.props.answer}</button>
          <button className="does-this-work" onClick={this.handleClick}>{this.props.answer}</button>
        </div>
      </div>
    );
  }
}

export default Question;
