import { R as React, q as ReactDOM } from './vendor.jsx';
import App from './App.tsx';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
