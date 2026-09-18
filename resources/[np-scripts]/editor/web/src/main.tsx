import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootEl = document.getElementById('root');
if (rootEl && !rootEl.hasChildNodes() && typeof App === 'function') {
  ReactDOM.createRoot(rootEl).render(<App />);
}
