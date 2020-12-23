import React from 'react';
import {Link} from 'react-router-dom';
import Routing from 'routes/routes.js';

const App = () => {

    return (
        <>
            <main>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Login Page</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Signup Page</Link>
                        </li>
                        <li>
                            <Link to='/forgot-password'>Forgot Password Page</Link>
                        </li>
                    </ul>
                </div>
            </main>
            <Routing/>
        </>
    );
};

export default App;
