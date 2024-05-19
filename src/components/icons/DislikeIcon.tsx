import { Component } from "solid-js";

const DislikeIcon: Component = () => {
    return (
        <svg width="20" height="20" fill="var(--vote-blue)" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.057 14.183c.46 1.427.693 2.676.693 3.753 0 2.399-.939 4.248-2.5 4.248-.8 0-1.078-.45-1.383-1.547l-.27-1.021c-.1-.359-.276-.97-.526-1.831a.246.246 0 0 0-.03-.065l-2.866-4.486a5.886 5.886 0 0 0-2.855-2.327l-1.257-.48A1.75 1.75 0 0 1 2.97 8.458l.686-3.539A2.25 2.25 0 0 1 5.33 3.163l8.25-2.022a4.75 4.75 0 0 1 5.733 3.44l1.574 6.173a2.75 2.75 0 0 1-2.665 3.429h-3.165Z" />
        </svg>
    );
};

export default DislikeIcon;
