import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getNoteById } from "../services/notesServices";
import formatDate from "../utils/formatDate";
import { Title, Text, Center, Stack, Group, Badge, Divider } from "@mantine/core";
import NotFoundPage from "./NotFoundPage";

function NoteDetailPage() {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    React.useEffect(() =>{
        const note = getNoteById(id);
        setNote(note);
    }, [id]);

    if (!note) {
        return <NotFoundPage />;
    }

    return (
        <article>
            <Stack spacing="md">
                <Title order={2}>{note.title}</Title>

                <Group justify="space-between">
                    <Badge color="dark" variant="light">
                        {formatDate(note.createdAt)}
                    </Badge>
                </Group>

                <Divider />

                <Text size="md" lh={1.8}>
                    {note.body}
                </Text>
            </Stack>
        </article>
    );
}

export default NoteDetailPage;