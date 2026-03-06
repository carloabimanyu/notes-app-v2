import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ArchivesPage from "./pages/ArchivesPage";
import NotFoundPage from "./pages/NotFoundPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePage from "./pages/AddNotePage";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthRoute from "./routes/AuthRoute";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
    return (
        <Routes>
            <Route 
                path="/login" 
                element={
                    <AuthRoute>
                        <LoginPage />
                    </AuthRoute>
                }
            />
            <Route 
                path="/register" 
                element={
                    <AuthRoute>
                        <RegisterPage />
                    </AuthRoute>
                } 
            />

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <MainLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<HomePage />} />
                <Route path="archives" element={<ArchivesPage />} />
                <Route path="notes/new" element={<AddNotePage />} />
                <Route path="notes/:id" element={<NoteDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;