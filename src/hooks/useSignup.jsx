import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export const useSignup = () => {
	// State for error and pending
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);

	// Destructure Auth Context Hook
	const { state, dispatch } = useAuthContext();

	// Funtion that gets invoked whenever we want to sign a user up.
	const signup = async (email, password, displayName) => {
		setError(null);
		setIsPending(true);
		try {
			// Sign up user with the email & password they entered in
			// projectAuth has a method to sign the user up called "createUserWithEmailAndPassword", which takes two arguments: email and password. It sends back a response.
			const res = await projectAuth.createUserWithEmailAndPassword(
				email,
				password
			);
			// If the response is bad, throw an error
			if (!res) {
				throw new Error("Could not complete signup");
			}

			// Add display name to user object that is returned.
			await res.user.updateProfile({ displayName });

			// Dispatch LOG_IN action
			dispatch({
				type: "LOG_IN",
				payload: res.user,
			});
			// reset pending and error states
			setIsPending(false);
			setError(null);

			// Catch error if there is one and reset error and pending states
		} catch (err) {
			console.log(err.message);
			setError(err.message);
			setIsPending(false);
		}
	};

	return { signup, error, isPending };
};
