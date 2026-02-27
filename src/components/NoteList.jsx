import { SimpleGrid, Text } from "@mantine/core";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    if (!notes.length) {
        return (
            <Text>No notes found</Text>
        );
    }

    return (
        <SimpleGrid 
            cols={{ base: 1, sm: 1, md: 2, lg: 3 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
        >
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                />
            ))}
        </SimpleGrid>
    );
}

export default NoteList;