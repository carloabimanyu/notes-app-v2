import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(
        localStorage.getItem("lang") || "en"
    );

    useEffect(() => {
        localStorage.setItem("lang", language);
    }, [language]);

    const translations = {
        en: {
            homeTitle: "Active Notes",
            archivesTitle: "Archived Notes",
            searchPlaceholder: "Search by title",
            homeButton: "Home",
            archivesButton: "Archives",
            logoutButton: "Logout",
            newNoteHeader: "Add New Note",
            newNoteTitleLabel: "Title",
            newNoteTitlePlaceholder: "My New Note",
            newNoteBodyLabel: "Note body",
            newNoteBodyPlaceholder: "Today I feel ...",
            newNoteSubmitButton: "Save Note",
            notFoundTitle: "Nothing to see here.",
            notFoundDescription: "Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.",
            notFoundBackButton: "Take me back to home page",
            noteNotFound: "No notes found",
            searchBarPlaceholder: "Search by title",
        },
        id: {
            homeTitle: "Catatan Aktif",
            archivesTitle: "Catatan Diarsipkan",
            searchPlaceholder: "Cari berdasarkan judul",
            homeButton: "Beranda",
            archivesButton: "Arsip",
            logoutButton: "Keluar",
            newNoteHeader: "Tambahkan Catatan Baru",
            newNoteTitleLabel: "Judul",
            newNoteTitlePlaceholder: "Catatan Baru Saya",
            newNoteBodyLabel: "Isi catatan",
            newNoteBodyPlaceholder: "Hari ini aku merasa ...",
            newNoteSubmitButton: "Simpan Catatan",
            notFoundTitle: "Tidak ada yang bisa dilihat di sini.",
            notFoundDescription: "Sayangnya, ini hanya halaman 404. Anda mungkin salah mengetik alamatnya, atau halaman tersebut telah dipindahkan ke URL lain.",
            notFoundBackButton: "Kembali ke halaman utama",
            noteNotFound: "Tidak ada catatan ditemukan",
            searchBarPlaceholder: "Cari berdasarkan judul",
        },
    };

    const t = (key) => translations[language][key];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);