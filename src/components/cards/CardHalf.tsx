import { Component } from "solid-js";
import SocialBar from "../social-bar/SocialBar";
import styles from "./Card.module.css";
import Attribution from "./Attribution";
import { Card } from "../Feed";

const CardHalf: Component<{ card: Card }> = (props) => {
    return (
        <div class={styles.cardHalf}>
            <a classList={{ [styles.cardTop]: true, [styles.cardLinkHalf]: true }} href={props.card.url}>
                <div class={styles.cardLeft}>
                    <Attribution card={props.card} />
                    <h2 class={styles.articleText}>{props.card.title}</h2>
                </div>
                <img class={styles.imageHalf} src={props.card.images[0].url} alt={props.card.images[0].caption || props.card.title} />
            </a>
            <SocialBar link={props.card.url} />
        </div>
    );
};

export default CardHalf;
