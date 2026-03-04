import React from "react";
import BaseNotesPage from "./BaseNotePage";
import { getArchivedNotes } from "../services/notesServices";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

function ArchivesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeKeyword = searchParams.get("title") || "";
    const { t } = useLanguage();

    function onKeywordChange(keyword) {
        setSearchParams({ title: keyword });
    }

    return (
        <BaseNotesPage
            title={t("archivesTitle")}
            showArchived={true}
            initialNotes={getArchivedNotes}
            defaultKeyword={activeKeyword}
            onKeywordChange={onKeywordChange}
        />
    );
}

export default ArchivesPage;