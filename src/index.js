import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import Home from './home';
import userHook, { UserProvider } from './context/userContext';

function App() {

    return (
        <UserProvider>
            <Wrapper />
        </UserProvider>
    );
}

function Wrapper() {

    const { currentUser } = userHook();

    // Show home only if currentUser is set
    return (
        currentUser ? <Home /> : <Login />
    );

}

ReactDOM.render(<App />, document.getElementById('root'));