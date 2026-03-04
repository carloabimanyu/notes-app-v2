import { SegmentedControl } from "@mantine/core";
import classes from "./LanguageSwitcher.module.css";
import { useLanguage } from "../contexts/LanguageContext";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <SegmentedControl
            radius="sm"
            size="xs"
            value={language}
            onChange={setLanguage}
            data={[
                { label: "EN", value: "en" },
                { label: "ID", value: "id" },
            ]}
            classNames={classes}
        />
    );
}