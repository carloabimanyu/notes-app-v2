import React, { useState, useEffect } from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { filterNotesByTitle } from "../services/filterNotes";
import AddNoteButton from "../components/AddNoteButton";
import { deleteNote, toggleArchiveNote } from "../services/notesServices";
import { Title } from "@mantine/core";

function BaseNotesPage({
    initialNotes = [],
    defaultKeyword = "",
    showArchived,
    title,
    onKeywordChange
}) {
    const [notes, setNotes] = useState(initialNotes);
    const [keyword, setKeyword] = useState(defaultKeyword);

    useEffect(() => {
        setKeyword(defaultKeyword);
    }, [defaultKeyword]);

    const handleKeywordChange = (newKeyword) => {
        setKeyword(newKeyword);
        if (onKeywordChange) {
            onKeywordChange(newKeyword);
        }
    };

    const handleDeleteNote = (id) => {
        deleteNote(id);
        setNotes((prevNotes) => 
            prevNotes.filter((note) => note.id !== id)
        );
    };

    const handleToggleArchive = (id) => {
        toggleArchiveNote(id);
        setNotes([...notes]);
    };

    const notesForPage = notes.filter(
        (note) => note.archived === showArchived
    );

    const filteredNotes = filterNotesByTitle(notesForPage, keyword);

    return (
        <>
            <Title
                m="md"
            >
                {title}
            </Title>

            <SearchBar
                keyword={keyword}
                onKeywordChange={handleKeywordChange}
            />

            <NoteList
                notes={filteredNotes}
                onDelete={handleDeleteNote}
                onToggleArchive={handleToggleArchive}
            />

            {!showArchived && <AddNoteButton />}
        </>
    );
}

export default BaseNotesPage;