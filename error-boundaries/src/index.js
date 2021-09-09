import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import ErrorBoundary from './Components/ErrorBoundaries/ErrorBoundary';

const main = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(main, document.getElementById('root'));