import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IconHome, IconArchive, IconLogout, IconUserFilled } from "@tabler/icons-react";
import { Avatar, Group, Text } from "@mantine/core";
import classes from "./Navbar.module.css";
import UserButton from "./UserButton";

const data = [
    { link: "/", label: "Home", icon: IconHome },
    { link: "/archives", label: "Archives", icon: IconArchive },
];

function Navbar() {
    const [active, setActive] = useState("Home");

    const links = data.map((item) => (
        <NavLink
            to={item.link}
            key={item.label}
            className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
            }
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </NavLink>
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