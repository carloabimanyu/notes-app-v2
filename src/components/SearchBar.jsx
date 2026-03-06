import { IconSearch } from "@tabler/icons-react";
import { TextInput, useMantineTheme, Flex } from "@mantine/core";
import { useLanguage } from "../contexts/LanguageContext";

function SearchBar({ keyword, onKeywordChange }) {
    const theme = useMantineTheme();
    const { t } = useLanguage();

    return (
        <Flex justify="left">
            <TextInput
                radius="xl"
                size="md"
                placeholder={t("searchBarPlaceholder")}
                rightSectionWidth={42}
                leftSection={<IconSearch size={18} stroke={1.5} />}
                aria-label="Search notes by title"
                w="100%"
                mb="md"
                maw={400}
                value={keyword}
                onChange={(event) => onKeywordChange(event.target.value)}
            />
        </Flex>

    );
}

export default SearchBar;