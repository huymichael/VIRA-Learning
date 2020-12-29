import React from 'react';

const MainLayout = (props) => {
    const {children: Children, ...rest} = props;
    return (
        <React.Fragment>
            layout
            {Children}
        </React.Fragment>);
};

export default MainLayout;