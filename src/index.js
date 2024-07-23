// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/reset.css'; // Updated path for antd v4.17.0 and above
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
