import React from 'react';//permite crear interfaces
import ReactDOM from 'react-dom';//permite crear interfaces entre la web
import './assets/styles/index.css';// importamos el css con los estilos
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
