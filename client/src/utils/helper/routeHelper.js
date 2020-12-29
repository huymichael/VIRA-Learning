import AuthLayout from 'HOC/layout/AuthLayout';
import MainLayout from 'HOC/layout/MainLayout';
import React from 'react';
import {Route} from 'react-router-dom';

const createRoute = (route) => {
    const {exact, path, isPrivate} = route;
    const RouteComponent = route.component;
    const Layout = !isPrivate ? AuthLayout : MainLayout;
    return <Route key={path}
                  exact={exact}
                  path={path}
                  render={props => (
                      <Layout>
                          <RouteComponent {...props}/>
                      </Layout>)}
    />;
};

export const RouteHelper = {
    createRoute,
};