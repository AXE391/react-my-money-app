import { useState, useEffect } from "react";
import { useSignup } from "../../hooks/useSignup";
// Styles for Signup Component
import styles from "./Signup.module.css";

export default function Signup() {
	// State for user's email, password and signup name
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const { signup, isPending, error } = useSignup();

	// Function that handles form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== "" && email !== "" && displayName !== "") {
			signup(email, password, displayName);
		} else {
			alert("Fill out all fields");
		}
	};

	// useEffect hook to watch changes in error and pending states
	useEffect(() => {
		if (!error && !isPending) {
			setEmail("");
			setPassword("");
			setDisplayName("");
		}
	}, [error, isPending]);

	return (
		<form className={styles["signup-form"]} onSubmit={handleSubmit}>
			<h2>Signup</h2>
			<label>
				<span>Email:</span>
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</label>
			<label>
				<span>Password:</span>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</label>

			<label>
				<span>Display Name:</span>
				<input
					type="text"
					onChange={(e) => setDisplayName(e.target.value)}
					value={displayName}
				/>
			</label>

			{isPending ? (
				<button className="btn" disabled>
					loading
				</button>
			) : (
				<button className="btn">Signup</button>
			)}
			{error && <p>{error}</p>}
		</form>
	);
}
