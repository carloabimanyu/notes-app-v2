import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Textarea, Button, Container, Title, Stack, Paper } from "@mantine/core";
import { addNote } from "../services/notesServices";

function AddNotePage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim() || !body.trim()) return;

        setIsSubmitting(true);

        addNote(
            title,
            body,
        );

        setIsSubmitting(false);
        navigate("/");
    };

    return (
        <Container size="sm" py="xl">
            <Paper shadow="sm" radius="md" p="xl" withBorder>
                <Title order={2} mb="lg">Add New Note</Title>

                <form onSubmit={handleSubmit}>
                    <Stack>
                        <TextInput
                            label="Title"
                            placeholder="My New Note"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            required
                        />

                        <Textarea
                            label="Note body"
                            placeholder="Today I feel ..."
                            minRows={20}
                            value={body}
                            onChange={(event) => setBody(event.target.value)}
                            required
                            autosize
                        />

                        <Button type="submit" loading={isSubmitting}>
                            Save Note
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    );
}

export default AddNotePage;