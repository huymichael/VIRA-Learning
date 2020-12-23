import {ThemeProvider} from '@material-ui/core';
import 'assets/scss/main.scss';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import viraTheme from 'utils/themes/viraTheme.jsx';
import App from './App';
import reportWebVitals from './reportWebVitals';

const MOUNT_NODE = document.getElementById('vira-app');

const Vira = () => (
    <Fragment>
        <ThemeProvider theme={viraTheme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </Fragment>

);

ReactDOM.render(
    <Vira/>,
    MOUNT_NODE,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
