import React, { useEffect, useState } from "react";
import BaseNotesPage from "./BaseNotePage";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../services/notes";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Loading } from "../components/Loading";

function ArchivesPage() {
    const [notes, setNotes] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const activeKeyword = searchParams.get("title") || "";
    const { t } = useLanguage();

    useEffect(() => {
        async function fetchNotes() {
            const { data } = await getArchivedNotes();
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
        await unarchiveNote(id);

        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === id ? { ...note, archived: false } : note
            )
        );
    };

    return (
        <BaseNotesPage
            title={t("archivesTitle")}
            showArchived={true}
            notes={notes}
            defaultKeyword={activeKeyword}
            onKeywordChange={onKeywordChange}
            onDelete={handleDeleteNote}
            onToggleArchive={handleToggleArchive}
        />
    );
}

export default ArchivesPage;