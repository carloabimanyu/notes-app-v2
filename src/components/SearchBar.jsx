import { IconSearch } from "@tabler/icons-react";
import { TextInput, useMantineTheme, Flex } from "@mantine/core";

function SearchBar(props) {
    const theme = useMantineTheme();

    return (
        <Flex justify="center">
            <TextInput
                radius="xl"
                size="md"
                placeholder="Search by title"
                rightSectionWidth={42}
                leftSection={<IconSearch size={18} stroke={1.5} />}
                aria-label="Search notes by title"
                w="100%"
                mb="md"
                maw={400}
                {...props}
            />
        </Flex>

    );
}

export default SearchBar;