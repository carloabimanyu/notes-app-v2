import React from "react";
import BaseNotesPage from "./BaseNotePage";
import { getActiveNotes } from "../services/notesServices";
import { useSearchParams } from "react-router-dom";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeKeyword = searchParams.get("title") || "";

    function onKeywordChange(keyword) {
        setSearchParams({ title: keyword });
    }

    return (
        <BaseNotesPage
            title="Active Notes"
            showArchived={false}
            initialNotes={getActiveNotes}
            defaultKeyword={activeKeyword}
            onKeywordChange={onKeywordChange}
        />
    );
}

export default HomePage;