import { createEffect, createMemo, createSignal, type Component } from "solid-js";

import ThemeToggle from "./components/ThemeToggle";
import Feed from "./components/Feed";
import Header from "./components/header/Header";

export type Appearance = "light" | "dark" | "system";

const App: Component = () => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const [isSystemDarkMode, setSystemDarkMode] = createSignal(darkModeQuery.matches);

    darkModeQuery.addEventListener("change", (m) => {
        setSystemDarkMode(m.matches);
    });

    const [appearance, setAppearance] = createSignal<Appearance>((localStorage.getItem("appearance") as Appearance) ?? "system");

    createEffect(() => {
        localStorage.setItem("appearance", appearance());
    });

    const isDarkMode = createMemo(() => (appearance() === "system" ? isSystemDarkMode() : appearance() === "dark"));

    createEffect(() => {
        const htmlElm = document.querySelector(":root")!;

        if (isDarkMode()) {
            htmlElm?.classList.add("dark");
        } else {
            htmlElm?.classList.remove("dark");
        }
    });

    return (
        <div>
            <Header />
            <ThemeToggle setAppearance={setAppearance} isDarkMode={isDarkMode()} />
            <Feed />
        </div>
    );
};

export default App;
