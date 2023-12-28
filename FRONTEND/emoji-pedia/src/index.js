import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import emojipedia from './emojipedia';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

const onlyMeaning = emojipedia.map(function(i) {
  return i.meaning.substring(0,100);
});

console.log(onlyMeaning);
