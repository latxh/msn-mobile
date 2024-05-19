import { Component } from "solid-js";
import SocialBar from "./SocialBar";
import styles from "./Card.module.css";
import { Card } from "./Feed";
import Attribution from "./Attribution";

const CardFull: Component<{ card: Card }> = (props) => {
    return (
        <div class={styles.cardFull}>
            <a class={styles.cardLink} href={props.card.url}>
                <img class={styles.image} src={props.card.images[0].url} alt={props.card.images[0].caption || props.card.title} />
                <Attribution card={props.card} />
                <h2 class={styles.articleText}>{props.card.title}</h2>
            </a>
            <SocialBar />
        </div>
    );
};

export default CardFull;
