import React from 'react';

const AuthLayout = (props) => {
    const {children: Children, ...rest} = props;
    console.log(Children);
    return (
        <React.Fragment>
            {Children}
        </React.Fragment>);
};


export default AuthLayout;