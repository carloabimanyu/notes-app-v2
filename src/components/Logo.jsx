import { Link } from "react-router-dom";
import { Title } from "@mantine/core";

function Logo() {
    return (
        <Title
            size="xl"
            fw={800}
            style={{ textDecoration: 'none' }}
        >
            Notes App
        </Title>
    )
}

export default Logo;