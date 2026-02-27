import { useState } from "react";
import { IconHome, IconArchive, IconLogout, IconUserFilled } from "@tabler/icons-react";
import { Avatar, Group, Text } from "@mantine/core";
import classes from "./Navbar.module.css";
import UserButton from "./UserButton";

const data = [
    { link: "", label: "Home", icon: IconHome },
    { link: "", label: "Archives", icon: IconArchive },
];

function Navbar() {
    const [active, setActive] = useState("Home");

    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <UserButton />
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </div>
        </nav>
  );
}

export default Navbar;