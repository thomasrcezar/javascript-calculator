import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import './index.css';
import App from './app.js'; // Update this import

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
