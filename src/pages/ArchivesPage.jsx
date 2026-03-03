import React from "react";
import BaseNotesPage from "./BaseNotePage";
import { getArchivedNotes } from "../services/notesServices";
import { useSearchParams } from "react-router-dom";

function ArchivesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeKeyword = searchParams.get("title") || "";

    function onKeywordChange(keyword) {
        setSearchParams({ title: keyword });
    }

    return (
        <BaseNotesPage
            title="Archived Notes"
            showArchived={true}
            initialNotes={getArchivedNotes}
            defaultKeyword={activeKeyword}
            onKeywordChange={onKeywordChange}
        />
    );
}

export default ArchivesPage;