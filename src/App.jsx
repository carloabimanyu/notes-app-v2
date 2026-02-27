import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route index element={<p>Homepage</p>} />
                <Route path="archives" element={<p>Archives Page</p>} />
                <Route path="notes/new" element={<p>New Note Page</p>} />
                <Route path="notes/:id" element={<p>Note Detail Page</p>} />
                <Route path="*" element={<p>Not Found Page</p>} />
            </Route>
        </Routes>
    );
}

export default App;