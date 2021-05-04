import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lift from './containers/Lift';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Lift pagetitle="React Learning" />,
  </React.StrictMode>,
  document.getElementById('roots')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
