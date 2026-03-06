import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Textarea, Button, Container, Title, Stack, Paper } from "@mantine/core";
import { useLanguage } from "../contexts/LanguageContext";
import { addNote } from "../services/notes";

function AddNotePage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useLanguage();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title.trim() || !body.trim()) return;

        setIsSubmitting(true);
        await addNote({ title, body });
        setIsSubmitting(false);
        navigate("/");
    };

    return (
        <Container size="sm" py="xl">
            <Paper shadow="sm" radius="md" p="xl" withBorder>
                <Title order={2} mb="lg">{t("newNoteHeader")}</Title>

                <form onSubmit={handleSubmit}>
                    <Stack>
                        <TextInput
                            label={t("newNoteTitleLabel")}
                            placeholder={t("newNoteTitlePlaceholder")}
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            required
                        />

                        <Textarea
                            label={t("newNoteBodyLabel")}
                            placeholder={t("newNoteBodyPlaceholder")}
                            minRows={20}
                            value={body}
                            onChange={(event) => setBody(event.target.value)}
                            required
                            autosize
                        />

                        <Button type="submit" loading={isSubmitting}>
                            {t("newNoteSubmitButton")}
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    );
}

export default AddNotePage;