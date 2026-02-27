import { Card, Text, Group, ActionIcon, Image } from "@mantine/core";
import classes from "./NoteItem.module.css";
import { IconArchiveFilled, IconTrashFilled } from "@tabler/icons-react";

function NoteItem({ note }) {
    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section>
                <Image src={`https://picsum.photos/seed/${note.id}/600/400`} height={180} className={classes.image} />
            </Card.Section>

            <Text className={classes.title}>
                {note.title}
            </Text>

            <Text fz="sm" lineClamp={4} opacity={0.9}>
                {note.body}
            </Text>
            
            <Group justify="space-between" className={classes.footer}>
                <Group gap="xs">
                    <Text fz="sm">{note.createdAt}</Text>
                </Group>

                <Group gap={8}>
                    <ActionIcon className={classes.action} aria-label="Like">
                        <IconArchiveFilled size={16} color="var(--mantine-color-cyan-6)" />
                    </ActionIcon>
                    <ActionIcon className={classes.action} aria-label="Bookmark">
                        <IconTrashFilled size={16} color="var(--mantine-color-red-6)" />
                    </ActionIcon>
                </Group>
            </Group>
        </Card>
    );
}

export default NoteItem;