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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth";

export function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleRegister(event) {
        event.preventDefault();

        setLoading(true);

        const { error } = await register({
            name,
            email,
            password
        });

        setLoading(false);

        if (!error) {
            navigate("/login");
        }
    }

    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Hi new user!
            </Title>

            <Text className={classes.subtitle}>
                Already have an account? <Anchor component={Link} to="/login">Sign in</Anchor>
            </Text>

            <Paper 
                component="form"
                onSubmit={handleRegister}
                withBorder 
                shadow="sm" 
                p={22} 
                mt={30} 
                radius="md"
            >
                <TextInput 
                    label="Name" 
                    placeholder="Your name" 
                    required radius="md" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}
                />

                <TextInput 
                    label="Email" 
                    placeholder="you@email.com" 
                    required radius="md" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <PasswordStrength 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <Button loading={loading} type="submit" fullWidth mt="xl" radius="md">
                    Register
                </Button>
            </Paper>
        </Container>
    );
}