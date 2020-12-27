import React, {lazy} from 'react';
import {siteLink} from 'utils/constants/siteLink';

// const Login = RouteHelper.lazyImport('../views/pages/Auth/Login');
// const SignUp = RouteHelper.lazyImport('../views/pages/Auth/SignUp');
// const ForgotPassword = RouteHelper.lazyImport('../views/pages/Auth/ForgotPassword');

const Login = lazy(() => import('views/pages/Auth/Login'));
const SignUp = lazy(() => import('views/pages/Auth/SignUp'));
const ForgotPassword = lazy(() => import('views/pages/Auth/ForgotPassword'));


const AppRoute = () => {
    return [
        {
            isPrivate: false,
            path: '/',
            layout: '',
            children: [
                {path: `${siteLink.auth.login}`, exact: true, component: Login},
                {path: `${siteLink.auth.signUp}`, exact: true, component: SignUp},
                {path: `${siteLink.auth.forgotPassword}`, exact: true, component: ForgotPassword},
            ],

        },
        {
            isPrivate: true,
        },
    ];
};

export default AppRoute;