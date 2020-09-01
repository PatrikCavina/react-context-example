import React from 'react';
import userHook from './context/userContext';

function Login () {

    // Create hook to catch input value
    const [ username, setUsername ] = React.useState('');
    const { currentUser, setCurrentUser } = userHook();

    // Render page
    // On username input change catch its value in username from setUsername
    // On Login button click currentUser take username value 
    return (
        <div>
            <input placeholder="Username" name="username" type="text" onChange={(evt) => setUsername(evt.currentTarget.value)}></input>{' '}
            <button onClick={(evt) => setCurrentUser(username)}>LOGIN</button>
        </div>
    );
}

export default Login;