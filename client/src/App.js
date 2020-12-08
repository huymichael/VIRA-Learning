import React from 'react';
import iconSVG from './assets/icons/logo.svg';
import imagePNG from './assets/images/logo.png';
import './assets/scss/main.scss';
import logo from './logo.svg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <img src={iconSVG} className="App-logo" alt="iconSVG"/>
                <img src={imagePNG} className="App-logo" alt="imagePNG"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p className='michael-test'>Michael test font</p>
                <p className='michael-test2'>Michael test font 2</p>
            </header>
        </div>
    );
}

export default App;
