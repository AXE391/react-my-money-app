import { useState } from "react";
// Styles for Login component
import styles from "./Login.module.css";
export default function Login() {
	// State for email and password
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if ((password !== "") & (email !== "")) {
			alert(`Password:${password}. Email:${email}`);
		} else {
			alert("Go FUCK yo self!");
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles["login-form"]}>
			<h2>login</h2>
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
			<button className="btn">Login</button>
		</form>
	);
}
