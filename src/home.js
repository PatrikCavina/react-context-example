import React from 'react';
import userHook from './context/userContext';

function Home() {

    // Get context hook from default import userHook
    const { currentUser, setCurrentUser } = userHook();


    // Render page
    // On button click currentUser will be replaced with empty string
    return (
        <div>
            <h1>Welcome home {currentUser}</h1>
            <button onClick={(evt) => setCurrentUser('')}>EXIT</button>
        </div>
    );
}

export default Home;