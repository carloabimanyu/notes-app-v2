import { createContext, useState, useEffect, useContext } from "react";
import { getAccessToken, putAccessToken } from "../services/token";
import { getUserLogged } from "../services/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [authedUser, setAuthedUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function initAuth() {
            const accessToken = getAccessToken();

            if (accessToken) {
                const { error, data } = await getUserLogged();

                if (!error) {
                    setAuthedUser(data);
                }
            }

            setLoading(false);
        }

        initAuth();
    }, []);

    const loginSuccess = async (accessToken) => {
        putAccessToken(accessToken);

        const { data } = await getUserLogged();
        setAuthedUser(data);
    };

    const logout = () => {
        putAccessToken("");
        setAuthedUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                authedUser,
                loading,
                loginSuccess,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };