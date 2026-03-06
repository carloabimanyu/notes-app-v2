import React, { useState, useEffect } from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { filterNotesByTitle } from "../services/filterNotes";
import AddNoteButton from "../components/AddNoteButton";
import { Title } from "@mantine/core";
import { Loading } from "../components/Loading";

function BaseNotesPage({
    notes = [],
    loading = false,
    defaultKeyword = "",
    showArchived,
    title,
    onKeywordChange,
    onDelete,
    onToggleArchive
}) {
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

    const notesForPage = notes.filter(
        (note) => note.archived === showArchived
    );

    const filteredNotes = filterNotesByTitle(notesForPage, keyword);

    return (
        <>
            <Title m="md">
                {title}
            </Title>

            <SearchBar
                keyword={keyword}
                onKeywordChange={handleKeywordChange}
            />

            {loading ? (
                <Loading />
            ) : (
                <NoteList
                    notes={filteredNotes}
                    onDelete={onDelete}
                    onToggleArchive={onToggleArchive}
                />
            )}

            {!showArchived && <AddNoteButton />}
        </>
    );
}

export default BaseNotesPage;