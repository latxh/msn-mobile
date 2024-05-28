import { Component } from "solid-js";
import styles from "./GlanceCards.module.css";
import searchStyles from "./SearchBar.module.css";
import SearchIcon from "../icons/SearchIcon";
import WeatherIcon from "../icons/WeatherIcon";
import MicrosoftIcon from "../icons/MicrosoftIcon";
import TrafficIcon from "../icons/TrafficIcon";
import PollenIcon from "../icons/PollenIcon";
import TorontoIcon from "../icons/TorontoIcon";

const GlanceCards: Component = () => {
    return (
        <div>
            <div class={searchStyles.searchWrapper}>
                <input class={searchStyles.searchBar} placeholder="Search the web" type="text" />
                <div class={searchStyles.searchIcon}>
                    <SearchIcon />
                </div>
            </div>

            <div class={styles.carousel}>
                <button class={styles.glanceCard}>
                    <div class={styles.col}>
                        <h2 class={styles.priText}>12°C</h2>
                        <p class={styles.secText}>Seattle</p>
                    </div>
                    <WeatherIcon />
                </button>
                <button class={styles.glanceCard}>
                    <div class={styles.col}>
                        <h2 class={styles.priText}>MSFT</h2>
                        <p class={styles.secText}>
                            430.16 <span class={styles.stockChange}>+0.74%</span>
                        </p>
                    </div>
                    <MicrosoftIcon />
                </button>
                <button class={styles.glanceCard}>
                    <div class={styles.col}>
                        <h2 class={styles.priText}>5:30 PM</h2>
                        <p class={styles.secText}>TOR v SEA · Today</p>
                    </div>
                    <TorontoIcon />
                </button>
                <button class={styles.glanceCard}>
                    <div class={styles.col}>
                        <h2 class={styles.priText}>Heavy Traffic</h2>
                        <p class={styles.secText}>30 min to work</p>
                    </div>
                    <TrafficIcon />
                </button>
                <button class={styles.glanceCard}>
                    <div class={styles.col}>
                        <h2 class={styles.priText}>Grass Allergy</h2>
                        <p class={styles.secText}>Very High Pollen</p>
                    </div>
                    <PollenIcon />
                </button>
            </div>
        </div>
    );
};

export default GlanceCards;
