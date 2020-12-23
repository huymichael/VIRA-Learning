import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import Routing from 'routes/routers.js';

const App = () => {
    let history = useHistory();

    const onClick=()=>{
        history.push('/');
    }
    return (
        <>
            <main>
                <div>
                    <ul>
                        <li>
                            <Link to='/login'>Login Page</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Signup Page</Link>
                        </li>
                        <li>
                            <Link to='/forgot-password'>Forgot Password Page</Link>
                        </li>
                        <li onClick={onClick}>
                            test push
                        </li>
                    </ul>
                </div>
            </main>
            <Routing/>
        </>
    );
};

export default App;
