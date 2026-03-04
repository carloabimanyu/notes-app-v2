import { Link } from "react-router-dom";
import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./NotFoundPage.module.css";

function NotFoundPage() {
    const { t } = useLanguage();

    return (
        <Container className={classes.root}>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>{t("notFoundTitle")}</Title>
            <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                {t("notFoundDescription")}
            </Text>
            <Group justify="center">
                <Button variant="subtle" size="md" component={Link} to="/">
                    {t("notFoundBackButton")}
                </Button>
            </Group>
        </Container>
    );
}

export default NotFoundPage;