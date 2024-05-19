import { Component, For, Match, Show, Switch, createResource } from "solid-js";
import CardFull from "./CardFull";
import CardHalf from "./CardHalf";
import NativeAdFull from "./NativeAdFull";

export type FeedResponse = {
    sections: Section[];
};

export type Section = {
    cards: Card[];
    dataTemplate: string;
    layoutTemplate: string;
};

export type Card = {
    type: "article" | "infopane" | "nativead" | "video" | "slideshow";
    category: string;
    images: CardImage[];
    provider: Provider;
    publishedDateTime: string;
    title: string;
    url: string;
};

export type Provider = {
    id: string;
    logoUrl: string;
    name: string;
    profileId: string;
};

export type CardImage = {
    title: string;
    caption: string;
    url: string;
    colorSamples: [ColorSample, ColorSample];
    height: number;
    width: number;
    source: string;
};

export type ColorSample = {
    hexColor: string;
    isDarkMode: boolean;
    isGrayScale: boolean;
};

const Feed: Component = () => {
    const [feed] = createResource<FeedResponse, string, unknown>("feed", async () => {
        const res = await fetch(
            `https://assets.msn.com/service/news/feed/pages/startmhp?${new URLSearchParams({
                audienceMode: "adult",
                it: "edgeid",
                activityId: "CFBA3031-9CAC-4854-AA50-484D795B74EF",
                apikey: "0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM",
                ocid: "emmx-mmx-feeds",
                timeOut: "2000",
                cm: "en-us",
                edgeMobileAds: "1",
                User: "m-07A8AE70EAE462CE1DBCBD90EB5E6364",
            })}`
        );

        return await res.json();
    });

    // <pre>{JSON.stringify(cards, null, 4)}</pre>;
    return (
        <div>
            <For each={feed()?.sections.flatMap((section) => section.cards)}>
                {(card, index) => (
                    // add to Switch atr: fallback={<div>Unsupported {card.type}</div>}
                    <Switch>
                        <Match when={card.type === "article" || card.type === "video" || card.type === "slideshow"}>
                            <Show when={index() % 4 == 0} fallback={<CardHalf card={card} />}>
                                <CardFull card={card} />
                            </Show>
                        </Match>
                        <Match when={card.type === "nativead"}>
                            <NativeAdFull />
                        </Match>
                    </Switch>
                )}
            </For>
        </div>
    );
};

export default Feed;
