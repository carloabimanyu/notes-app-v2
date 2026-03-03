import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ArchivesPage from "./pages/ArchivesPage";
import NotFoundPage from "./pages/NotFoundPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePage from "./pages/AddNotePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="archives" element={<ArchivesPage />} />
                <Route path="notes/new" element={<AddNotePage />} />
                <Route path="notes/:id" element={<NoteDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;