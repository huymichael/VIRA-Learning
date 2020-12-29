import React from 'react';

const AuthLayout = (props) => {
    const {children: Children, ...rest} = props;
    return (
        <React.Fragment>
            layout
            {Children}
        </React.Fragment>);
};


export default AuthLayout;