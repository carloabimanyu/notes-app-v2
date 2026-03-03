import { Avatar, Group, Text, UnstyledButton } from "@mantine/core";
import classes from "./UserButton.module.css";

function UserButton() {
    return (
        <UnstyledButton className={classes.user}>
            <Group>
                <Avatar
                    radius="xl"
                    key={"User Name"}
                    name={"User Name"}
                    color="initials"
                />

                <div style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>
                        User Name
                    </Text>

                    <Text c="dimmed" size="xs">
                        username@email.com
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    );
}

export default UserButton;