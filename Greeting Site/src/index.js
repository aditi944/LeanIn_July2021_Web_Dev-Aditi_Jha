import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';

const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greeting = 'Good Morning';
  cssStyle.color = 'lightGreen';
} else if (currDate >= 12 && currDate < 19) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'yellow';
} else {
  greeting = 'Good Night';
  cssStyle.color = 'lightBlue';
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello Ma'am, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById('root')
);
