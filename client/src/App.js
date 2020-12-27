import React, {Suspense} from 'react';
import {Link, useHistory} from 'react-router-dom';
import AppRoute from 'router/routes.js';
import {RouteHelper} from 'utils/helper/routeHelper.js';


const App = () => {
    let history = useHistory();

    const onClick = () => {
        history.push('/');
    };
    return (
        <>
            <main>
                <div>
                    <ul>
                        <li>
                            <Link to='/login'>Login Page</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Signup Page</Link>
                        </li>
                        <li>
                            <Link to='/forgot-password'>Forgot Password Page</Link>
                        </li>
                        <li onClick={onClick}>
                            test push
                        </li>
                    </ul>
                </div>
            </main>
            <Suspense fallback={<div>Loading...</div>}>
                {
                    AppRoute().map(route => RouteHelper.createRoute(route))
                }
            </Suspense>
        </>
    );
};

export default App;
