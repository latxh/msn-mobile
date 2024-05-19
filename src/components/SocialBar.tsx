import LikeIcon from "./icons/LikeIcon";
import DislikeIcon from "./icons/DislikeIcon";
import { Component, createSignal } from "solid-js";
import CommentIcon from "./icons/CommentIcon";
import ContextIcon from "./icons/ContextIcon";
import styles from "./SocalBar.module.css";

const SocialBar: Component = () => {
    const [reaction, setReaction] = createSignal<null | "like" | "dislike">(null);
    const [likeCount, setLikeCount] = createSignal(Math.floor(Math.random() * 1000));

    return (
        <div class={styles.socialBar}>
            <div class={styles.left}>
                <div class={styles.voteWrapper}>
                    <button
                        classList={{
                            [styles.reactionButton]: true,
                            [styles.active]: reaction() === "like",
                            [styles.likeAnim]: reaction() === "like",
                        }}
                        onClick={(event) => {
                            event.stopPropagation();
                            window?.navigator?.vibrate?.(50);
                            if (reaction() === "like") {
                                setReaction(null);
                                setLikeCount((prev) => prev - 1);
                            } else {
                                setReaction("like");
                                setLikeCount((prev) => prev + 1);
                            }
                        }}
                    >
                        <LikeIcon />
                        <p
                            classList={{
                                [styles.likeCounter]: true,
                                [styles.upvote]: reaction() === "like",
                            }}
                        >
                            {likeCount()}
                        </p>
                    </button>

                    <div class={styles.voteBreak}></div>

                    <button
                        class={styles.reactionButton}
                        classList={{ [styles.active]: reaction() === "dislike" }}
                        onClick={(event) => {
                            event.stopPropagation();
                            if (reaction() === "dislike") {
                                setReaction(null);
                            } else {
                                setReaction("dislike");
                            }
                        }}
                    >
                        <DislikeIcon />
                    </button>
                </div>

                <button class={styles.comments} onClick={(event) => event.stopPropagation()}>
                    <CommentIcon />
                </button>
            </div>

            <div class={styles.right}>
                <button class={styles.contextMenu} onClick={(event) => event.stopPropagation()}>
                    <ContextIcon />
                </button>
            </div>
        </div>
    );
};

export default SocialBar;
