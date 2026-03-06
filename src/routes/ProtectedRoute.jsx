import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Loading } from "../components/Loading";

function ProtectedRoute({ children }) {
    const { authedUser, loading } = useAuth();

    if (loading) {
        return <Loading />;
    }

    if (!authedUser) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;