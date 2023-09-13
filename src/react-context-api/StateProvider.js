import React, { createContext, useContext, useReducer } from "react";

// Prepare the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer to all our components
export const StateProvider = ({ children, reducer, initialState }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

// Pull information from the data layer
export const useStateContext = () => useContext(StateContext);
 