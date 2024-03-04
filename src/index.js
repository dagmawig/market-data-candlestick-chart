import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModalComp from './components/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, <ModalComp/>
);

