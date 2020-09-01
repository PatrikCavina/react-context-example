/**
 * User Context module
 * @module userContext
 */

import React from 'react';

// Create context and set its default value (null)
// Context will be an object { currentUser, setCurrentUser }
// 		currentUser = value
// 		setCurrentUser = function to set currentUser
const Context = React.createContext(null);


// ==== START JSDOC TYPEDEF (Not important) ====
/**
 * 
 * @typedef {Object} UserContextHook
 * @property {string} currentUser Current user
 * @property {funcion} setCurrentUser Set currentUser value 
 * 
 */
// ==== END JSDOC TYPEDEF ====


/**
 * Returns hook to handle user
 * 
 * @returns {UserContextHook}
 */
const userHook = () => {
	return React.useContext(Context);
};


/**
 * 
 * User context provider
 *
 */
const UserProvider = ({ children }) => {

	// Create hook for current user
	const [ currentUser, setCurrentUser ] = React.useState(null);

	// Hook is passed as object to provider value
	return (
		<Context.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</Context.Provider>
	);

};

/**
 * 
 * User context consumer
 * 
 */
const UserConsumer = Context.Consumer;

export { UserProvider, UserConsumer };
export default userHook;