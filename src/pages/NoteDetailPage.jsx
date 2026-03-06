import React, { useState } from "react";
import { useParams } from "react-router-dom";
import formatDate from "../utils/formatDate";
import { Title, Text, Center, Stack, Group, Badge, Divider } from "@mantine/core";
import NotFoundPage from "./NotFoundPage";
import { getNote } from "../services/notes";
import { Loading } from "../components/Loading";

function NoteDetailPage() {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        async function fetchNote() {
            const { data } = await getNote(id);
            setNote(data);
            setLoading(false);
        }

        fetchNote();
    }, [id]);

    if (!note && !loading) {
        return <NotFoundPage />;
    }

    return (
        <article>
            {loading ? (
                <Loading />
            ) : (
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
            )}
        </article>
    );
}

export default NoteDetailPage;