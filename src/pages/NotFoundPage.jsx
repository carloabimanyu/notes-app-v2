import { Link } from "react-router-dom";
import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./NotFoundPage.module.css";

function NotFoundPage() {
    return (
        <Container className={classes.root}>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>Nothing to see here.</Title>
            <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                Unforunately, this is only a 404 page. You may have mistyped the address, or the page has
                been moved to another URL.
            </Text>
            <Group justify="center">
                <Button variant="subtle" size="md" component={Link} to="/">
                    Take me back to home page
                </Button>
            </Group>
        </Container>
    );
}

export default NotFoundPage;