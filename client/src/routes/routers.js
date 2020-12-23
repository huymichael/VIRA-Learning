import AuthLayout from 'HOC/layout/AuthLayout.jsx';
import React from 'react';
import Loadable from 'react-loadable';
import {Redirect, Route, Switch} from 'react-router-dom';
import {siteLink} from 'utils/constants/siteLink';

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


const authSite = [
    {path: `${siteLink.auth.login}`, exact: true, component: LoginPage},
    {path: `${siteLink.auth.signUp}`, exact: true, component: SignUpPage},
    {path: `${siteLink.auth.forgotPassword}`, exact: true, component: ForgotPasswordPage},
];

const Routing = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={`${siteLink.auth.login}`} />
            </Route>
            <Route>
                <AuthLayout>
                    {
                        authSite.map((route, idx) =>
                            <Route key={idx}
                                   exact={route.exact}
                                   path={route.path}
                                   component={route.component}/>)
                    }
                </AuthLayout>
            </Route>

        </Switch>
    );
};

export default Routing;