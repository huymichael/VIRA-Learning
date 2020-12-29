import React, {lazy, Suspense} from 'react';
import {Link, Redirect, Route, Switch, useHistory} from 'react-router-dom';
import {AppRoutes} from 'router/routes.js';
import {siteLink} from 'utils/constants/siteLink.js';
import {RouteHelper} from 'utils/helper/routeHelper.js';

const NotFound = lazy(() => import('views/pages/NotFound/NotFound'));


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
                <Switch>
                    <Route exact path={siteLink.rootPath}>
                        <Redirect to={`${siteLink.auth.login}`}/>
                    </Route>
                    {
                        AppRoutes().map(route => RouteHelper.createRoute(route))
                    }
                    <Route component={NotFound}/>
                </Switch>
            </Suspense>
        </>
    );
};

export default App;
