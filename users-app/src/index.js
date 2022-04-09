import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const title = 'Users';
const users = [
  {
    Name: 'Osama baz',
    Age: '31',
    Gender: 'M',
    Active: true,
  },
  {
    Name: 'Mohammad baz',
    Age: '29',
    Gender: 'M',
    Active: true,
  },
  {
    Name: 'Assem',
    Age: '25',
    Gender: 'M',
    Active: false,
  },
];

ReactDOM.render(
  <App title={title} users={users} />,
  document.getElementById('root'),
);

reportWebVitals();
