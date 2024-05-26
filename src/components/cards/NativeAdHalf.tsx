import { Component } from "solid-js";
import AdBar from "../social-bar/AdBar";
import styles from "./Card.module.css";

const NativeAdHalf: Component = () => {
    return (
        <div class={styles.cardHalf}>
            <div classList={{ [styles.cardTop]: true, [styles.cardLinkHalf]: true }}>
                <div class={styles.cardLeft}>
                    <div class={styles.attribution}>
                        <p class={styles.publisherText}>Placeholder</p>
                    </div>
                    <h2 class={styles.articleText}>Ad Title</h2>
                </div>
                <div class={styles.imageHalf} />
            </div>
            <AdBar />
        </div>
    );
};

export default NativeAdHalf;
