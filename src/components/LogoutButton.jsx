import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { IconLogout } from "@tabler/icons-react";
import classes from "./LogoutButton.module.css";
import { Button } from "@mantine/core";
import { useAuth } from "../contexts/AuthContext";

export function LogoutButton() {
    const { t } = useLanguage();
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className={classes.footer}>
            <a 
                className={classes.link} 
                onClick={handleLogout}
            >
                <IconLogout className={classes.linkIcon} stroke={1.5} />
                <span>
                    {t("logoutButton")}
                </span>
            </a>
        </div>
    );
}