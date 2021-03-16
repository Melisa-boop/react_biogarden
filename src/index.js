// React modules
import React from 'react';                          // Permite crear los componentes
import ReactDOM from 'react-dom';                   // Permite renderizar los componentes en la vista
import reportWebVitals from './reportWebVitals';    // Permite medir y enviar las métricas de performance del sitio

// Estilos
import './assets/styles/index.css';

// Components
import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals(console.log);
