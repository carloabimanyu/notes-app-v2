import React from "react";
import BaseNotesPage from "./BaseNotePage";
import { getActiveNotes } from "../services/notesServices";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeKeyword = searchParams.get("title") || "";
    const { t } = useLanguage();

    function onKeywordChange(keyword) {
        setSearchParams({ title: keyword });
    }

    return (
        <BaseNotesPage
            title={t("homeTitle")}
            showArchived={false}
            initialNotes={getActiveNotes}
            defaultKeyword={activeKeyword}
            onKeywordChange={onKeywordChange}
        />
    );
}

export default HomePage;