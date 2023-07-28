import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container=fluid bg-light">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </div>
      <div className="col-md-4"></div>

      
    </div>
    
  </div>
);