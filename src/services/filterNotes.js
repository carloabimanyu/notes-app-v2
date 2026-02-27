function filterNotesByTitle(notes, keyword = '') {
    if (!keyword) {
        return notes;
    }

    return notes.filter(note =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
    );
}

export { filterNotesByTitle };