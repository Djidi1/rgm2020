import React from 'react';
import ReactDOM from "react-dom";
import _ from 'lodash';
import './style.css';
import Icon from './img/icon.png';
import printMe from './print.js';
import { ReactComponent } from './components/ReactComponent.jsx'


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // Add button
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

// Include react
ReactDOM.render(<ReactComponent />, document.getElementById('root'));
