import { 
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import classes from "./LoginPage.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { login } from "../services/auth";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { loginSuccess } = useAuth();

    async function handleSubmit(event) {
        event.preventDefault();

        setLoading(true);

        const { error, data } = await login({
            email,
            password,
        });

        console.log(data.accessToken);
        console.log(error);

        setLoading(false);

        if (!error) {
            console.log("Test")
            await loginSuccess(data.accessToken);
            navigate("/");
        }
    }

    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Welcome back!
            </Title>

            <Text className={classes.subtitle}>
                Do not have an account yet? <Anchor component={Link} to="/register">Create account</Anchor>
            </Text>

            <Paper 
                component="form"
                onSubmit={handleSubmit}
                withBorder 
                shadow="sm" 
                p={22} 
                mt={30} 
                radius="md"
            >
                <TextInput 
                    label="Email" 
                    placeholder="you@email.com" 
                    required radius="md" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <PasswordInput 
                    label="Password" 
                    placeholder="Your password" 
                    required mt="md" 
                    radius="md"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <Group justify="space-between" mt="lg">
                    <Checkbox label="Remember me" />
                    <Anchor component="button" size="sm">
                        Forgot password?
                    </Anchor>
                </Group>
                <Button 
                    type="submit"
                    fullWidth 
                    mt="xl" 
                    radius="md"
                    loading={loading}
                >
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}

