import { Avatar, Group, Text, UnstyledButton } from "@mantine/core";
import classes from "./UserButton.module.css";
import { useAuth } from "../contexts/AuthContext";

function UserButton() {
    const { authedUser } = useAuth();
    const { name, email } = authedUser;

    return (
        <UnstyledButton className={classes.user}>
            <Group>
                <Avatar
                    radius="xl"
                    key={email}
                    name={name}
                    color="initials"
                />

                <div style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>
                        {name}
                    </Text>

                    <Text c="dimmed" size="xs">
                        {email}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    );
}

export default UserButton;