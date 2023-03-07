import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/app';

const el= <h1>Привет мир!</h1>

console.log(el)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render(<App />)

