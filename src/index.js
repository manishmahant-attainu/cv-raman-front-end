import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//1. there should be just one store for 1 application
//2. react component state is lost when component unmounts but redux state is only lost when page is reloaded.

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('roots')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
