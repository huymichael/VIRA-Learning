import React from 'react';
import Loadable from 'react-loadable';
import {Route, Switch} from 'react-router-dom';
import Login from 'views/pages/Auth/Login.jsx';
// import LoginPage from 'views/pages/Auth/Login.jsx';

const Loading = () => (
    <div>Loading...</div>
);
const LoginPage = Loadable({
    loader: () => import('views/pages/Auth/Login'),
    loading: Loading,
});
const SignUpPage = Loadable({
    loader: () => import('views/pages/Auth/SignUp'),
    loading: Loading,
});
const ForgotPasswordPage = Loadable({
    loader: () => import('views/pages/Auth/ForgotPassword'),
    loading: Loading,
});
const NotFound = Loadable({
    loader: () => import('views/pages/NotFound/NotFound'),
    loading: Loading,
});

const Routes = [
    {
        key: 'root',
        path: '/',
        exact: true,
    },
    {
        key: 'login',
        path: '/login',
        exact: true,
        component: LoginPage,
    },
    {
        key: 'signup',
        path: '/signup',
        exact: true,
        component: SignUpPage,
    },
    {
        key: 'forgot-password',
        path: '/forgot-password',
        exact: true,
        component: ForgotPasswordPage,
    },
];


// const unAuthSite = [
//     {path: `${siteLink.auth.login}`, component: LoginPage},
//     {path: `${siteLink.auth.signUp}`, component: SignUpPage},
//     {path: `${siteLink.auth.forgotPassword}`, component: ForgotPasswordPage},
// ];

const Routing = () => {

    return (
        <Switch>
            {Routes.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.key}>
                    <LoginPage/>
                </Route>)}
            <Route render={() => NotFound}/>
        </Switch>

    );
};

export default Routing;