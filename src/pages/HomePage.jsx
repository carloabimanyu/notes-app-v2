import React, { useEffect, useState } from "react";
import BaseNotesPage from "./BaseNotePage";
import { archiveNote, deleteNote, getActiveNotes } from "../services/notes";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

function HomePage() {
    const [notes, setNotes] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const activeKeyword = searchParams.get("title") || "";
    const { t } = useLanguage();

    useEffect(() => {
        async function fetchNotes() {
            const { data } = await getActiveNotes();
            setNotes(data);
            setLoading(false);
        }
        
        fetchNotes();
    }, []);

    function onKeywordChange(keyword) {
        setSearchParams({ title: keyword });
    }

    const handleDeleteNote = async (id) => {
        await deleteNote(id);

        setNotes((prevNotes) =>
            prevNotes.filter((note) => note.id !== id)
        );
    };

    const handleToggleArchive = async (id) => {
        await archiveNote(id);

        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === id ? { ...note, archived: true } : note
            )
        );
    };

    return (
        <BaseNotesPage
            title={t("homeTitle")}
            showArchived={false}
            notes={notes}
            defaultKeyword={activeKeyword}
            onKeywordChange={onKeywordChange}
            onDelete={handleDeleteNote}
            onToggleArchive={handleToggleArchive}
            loading={loading}
        />
    );
}

export default HomePage;