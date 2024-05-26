import LikeIcon from "../icons/LikeIcon";
import DislikeIcon from "../icons/DislikeIcon";
import { Component, createSignal } from "solid-js";
import CommentIcon from "../icons/CommentIcon";
import ContextIcon from "../icons/ContextIcon";
import styles from "./SocalBar.module.css";

const SocialBar: Component<{ link: string }> = (props) => {
    const [reaction, setReaction] = createSignal<null | "like" | "dislike">(null);
    const [likeCount, setLikeCount] = createSignal(Math.floor(Math.random() * 1000));
    const [commentCount, setCommentCount] = createSignal(Math.floor(Math.random() * 100));

    return (
        <div class={styles.socialBar}>
            <div class={styles.left}>
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

                <button
                    class={styles.comments}
                    onClick={(event) => {
                        event.stopPropagation();
                        location.href = props.link + "#comments";
                    }}
                >
                    <CommentIcon />
                    <p class={styles.likeCounter}>{commentCount()}</p>
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
