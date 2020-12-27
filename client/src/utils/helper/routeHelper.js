import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {siteLink} from 'utils/constants/siteLink';


const createPublicRoute = (route) => {
    const {path, children} = route;
    return (
        <Switch>
            <Route path={path}>
                <Redirect to={`${siteLink.auth.login}`}/>
            </Route>
            {
                children.map(route =>
                    <Route key={route.path}
                           exact={route.exact}
                           path={route.path}
                           component={route.component}>
                    </Route>)
            }
        </Switch>
    );
};


const createRoute = (route) => {
    const {isPrivate} = route;
    if (!isPrivate) {
        return createPublicRoute(route);
    }
};

export const RouteHelper = {
    createRoute,
};