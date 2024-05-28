import { Component } from "solid-js";
import Logo from "../icons/Logo";
import NavIcon from "../icons/NavIcon";
import styles from "./Header.module.css";
import ProfilePic from "../../assets/ProfilePic.jpg";

const Header: Component = () => {
    return (
        <div class={styles.header}>
            <button class={styles.nav} aria-label="Open navigation menu">
                <NavIcon />
            </button>

            <Logo />

            <button class={styles.profilePic} aria-label="Open profile settings">
                <img src={ProfilePic} alt="Profile picture" />
            </button>
        </div>
    );
};

export default Header;
