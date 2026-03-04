import { SimpleGrid, Text } from "@mantine/core";
import NoteItem from "./NoteItem";
import { useLanguage } from "../contexts/LanguageContext";

function NoteList({ notes, onDelete, onToggleArchive }) {
    const { t } = useLanguage();

    if (!notes.length) {
        return (
            <Text>
                {t("noteNotFound")}
            </Text>
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
                    onDelete={onDelete}
                    onToggleArchive={onToggleArchive}
                />
            ))}
        </SimpleGrid>
    );
}

export default NoteList;