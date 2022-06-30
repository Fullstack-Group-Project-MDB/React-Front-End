import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <React.StrictMode>
    <userProvider>
      <Router>
        <App />
      </Router>
    </userProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
