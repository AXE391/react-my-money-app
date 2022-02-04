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
			// Sign up user with the email and password they entered in
			const res = await projectAuth.createUserWithEmailAndPassword(
				email,
				password
			);
			if (!res) {
				throw new Error("Could not complete signup");
			}

			// Add display name to user
			await res.user.updateProfile({ displayName });

			// Dispatch LOG_IN action
			dispatch({
				type: "LOG_IN",
				payload: res.user,
			});

			setIsPending(false);
			setError(null);
		} catch (err) {
			console.log(err.message);
			setError(err.message);
			setIsPending(false);
		}
	};

	return { signup, error, isPending };
};
