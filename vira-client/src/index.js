import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Vira = () => {
    return (
        <App/>
    );
};


ReactDOM.render(
    <React.StrictMode>
        <Vira/>
    </React.StrictMode>,
    document.getElementById('vira-app'),
);
reportWebVitals();
