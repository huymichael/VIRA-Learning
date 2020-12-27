import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {siteLink} from 'utils/constants/siteLink';


const createPublicRoute = (route) => {
    const {path, children} = route;
    return (
        <Switch>
            <Route  exact path={path}>
                <Redirect to={`${siteLink.auth.login}`}/>
            </Route>
            {
                children.map(route =>
                    <Route key={route.path}
                           exact={route.exact}
                           path={route.path}
                           component={route.component}/>)
            }
        </Switch>
    );
};


const createRoute = (route) => {
    const {isPrivate} = route;
    if (!isPrivate) {
        console.log(createPublicRoute(route))
        return createPublicRoute(route);
    }
};

export const RouteHelper = {
    createRoute,
};