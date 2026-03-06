import { 
    Anchor,
    Button,
    Container,
    Paper,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import classes from "./RegisterPage.module.css";
import { PasswordStrength } from "../components/PasswordStrength";

export function RegisterPage() {
    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Hi new user!
            </Title>

            <Text className={classes.subtitle}>
                Already have an account? <Anchor>Sign in</Anchor>
            </Text>

            <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@email.com" required radius="md" />
                <PasswordStrength />
                <Button fullWidth mt="xl" radius="md">
                    Register
                </Button>
            </Paper>
        </Container>
    );
}