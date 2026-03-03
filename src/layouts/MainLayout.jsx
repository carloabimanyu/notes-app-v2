import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";

function MainLayout() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            padding="md"
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { mobile: !opened },
            }}
        >
            <AppShell.Header>
                <Group h="100%" px="md" justify="space-between">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />

                   <Logo />

                   <ThemeToggle />
                </Group>

            </AppShell.Header>

            <AppShell.Navbar>
                <Navbar />
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}

export default MainLayout;