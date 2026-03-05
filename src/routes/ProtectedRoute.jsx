import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
    const { authedUser, loading } = useAuth();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!authedUser) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;