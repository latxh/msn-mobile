import { Component } from "solid-js";
import AdBar from "../social-bar/AdBar";
import styles from "./Card.module.css";

const NativeAdFull: Component = () => {
    return (
        <div class={styles.cardFull}>
            <div class={styles.cardLink}>
                <div class={styles.image} />
                <div class={styles.attribution}>
                    <p class={styles.publisherText}>Placeholder</p>
                </div>
                <h2 class={styles.articleText}>Ad Title</h2>
            </div>
            <AdBar />
        </div>
    );
};

export default NativeAdFull;
