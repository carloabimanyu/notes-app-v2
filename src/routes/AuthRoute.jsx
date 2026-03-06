import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function AuthRoute({ children }) {
    const { authedUser, loading } = useAuth();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (authedUser) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default AuthRoute;