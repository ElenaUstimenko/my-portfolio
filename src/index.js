import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import './index.css';
import icon from './images/favicon/cat.png';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Favicon url={icon} />
    <App />
  </HashRouter>
);
