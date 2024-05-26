import { Component } from "solid-js";
import AdIcon from "../icons/AdIcon";
import styles from "./SocalBar.module.css";

const AdBar: Component = () => {
    return (
        <div classList={{ [styles.socialBar]: true }}>
            <span class={styles.adBar}>Ad</span>
            <AdIcon />
        </div>
    );
};

export default AdBar;
