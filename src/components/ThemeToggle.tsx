import { Component, Setter } from "solid-js";
import LightIcon from "./icons/LightIcon";
import DarkIcon from "./icons/DarkIcon";
import { Appearance } from "../App";

const ThemeToggle: Component<{ setAppearance: Setter<Appearance>; isDarkMode: boolean }> = (props) => {
    return (
        <button
            style={{
                border: "none",
                position: "absolute",
                bottom: "20px",
                right: "20px",
                height: "40px",
                width: "40px",
                display: "flex",
                "align-items": "center",
                "border-radius": "50px",
                "background-color": "var(--theme-toggle)",
            }}
            aria-label="Toggle dark mode"
            onClick={() => {
                props.setAppearance(props.isDarkMode ? "light" : "dark");
            }}
        >
            {props.isDarkMode ? <DarkIcon /> : <LightIcon />}
        </button>
    );
};

export default ThemeToggle;
