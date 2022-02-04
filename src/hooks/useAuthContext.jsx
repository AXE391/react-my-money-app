import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context || context === undefined) {
		throw new Error("useAuth() must be used inside a theme provider");
	}
	return context;
};
