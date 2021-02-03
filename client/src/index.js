import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Editable from './components/tables/Editable';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Editable /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
