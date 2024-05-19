import { Component } from "solid-js";
import AdBar from "./AdBar";
import styles from "./Card.module.css";
import { Card } from "./Feed";

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
