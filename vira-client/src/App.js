import React from 'react';
import logo from 'assets/icons/logo.svg';
import logo2 from 'assets/images/logo.png';
import './App.css';
import Test from 'views/test';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <img src={logo2} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Test/>
            </header>
        </div>
    );
}

export default App;
