import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Loading } from "../components/Loading";

function AuthRoute({ children }) {
    const { authedUser, loading } = useAuth();

    if (loading) {
        return <Loading />;
    }

    if (authedUser) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default AuthRoute;