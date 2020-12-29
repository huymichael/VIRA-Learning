import React, {lazy} from 'react';
import {siteLink} from 'utils/constants/siteLink.js';

export const AppRoutes = () => [
    {
        path: `${siteLink.auth.login}`,
        component: lazy(() => import('views/pages/Auth/Login')),
        exact: true,
        isPrivate: false,
    },
    {
        path: `${siteLink.auth.signUp}`,
        component: lazy(() => import('views/pages/Auth/SignUp')),
        exact: true,
        isPrivate: false,
    },
    {
        path: `${siteLink.auth.forgotPassword}`,
        component: lazy(() => import('views/pages/Auth/ForgotPassword')),
        exact: true,
        isPrivate: false,
    },
];