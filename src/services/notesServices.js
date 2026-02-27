import notes from "../data/data";

function getActiveNotes() {
    return notes.filter((note) => !note.archived);
}

function getArchivedNotes() {
    return notes.filter((note) => note.archived);
}

function getNoteById(id) {
    return notes.find((note) => note.id === id);
}

function addNote(title, body) {
    const newNote = {
        id: `notes-${Date.now()}`,
        title: title || '(untitled)',
        body,
        createdAt: new Date().toISOString(),
        archived: false,
    };

    notes.push(newNote);
    return newNote;
}

function deleteNote(id) {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
    }
}

function toggleArchiveNote(id) {
    const note = notes.find(note => note.id === id);
    if (note) {
        note.archived = !note.archived;
        return;
    }
    return;
}

export { getActiveNotes, getArchivedNotes, getNoteById, addNote, deleteNote, toggleArchiveNote };