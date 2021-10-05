// all actions - ex search users and make requests in github
import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
	const initialState = null;

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	// Set Alert
	const setAlert = (msg, type) => {
		dispatch({
			type: SET_ALERT,
			payload: { msg, type },
		});

		setTimeout(() => {
			dispatch({ type: REMOVE_ALERT });
		}, 5000);
	};

	//this is a provider - will wrap entire app in this
	return (
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
