import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App API_URL={process.env.REACT_APP_APIURL || "http://chess.sweetbubalexxx.life"} />
  </React.StrictMode>
);
