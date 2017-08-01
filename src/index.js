import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Poiret One', 'cursive']
  }
})


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
