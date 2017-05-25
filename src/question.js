import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div className="Testingstuff">
        <h3>Which one of these is a button?</h3>
        <img src="http://netdna.copyblogger.com/images/650/call-to-action-buttons.jpg" />
        <div className="possible-choices">
          <button className="does-this-work">This is a button.</button>
          <button className="does-this-work">This is also a button.</button>
          <button className="does-this-work">Try this button.</button>
          <button className="does-this-work">I hate this button.</button>
        </div>
      </div>
    );
  }
}

export default Question;
