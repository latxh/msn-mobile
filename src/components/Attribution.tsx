import { Component } from "solid-js";
import SocialBar from "./SocialBar";
import styles from "./Card.module.css";
import { Card } from "./Feed";
import { FormatDistanceFn, FormatDistanceToNowStrictOptions, LocalizedOptions, addDays, formatDistanceToNowStrict, isAfter, isBefore, subDays } from "date-fns";
import locale from "date-fns/locale/en-US";

const formatDistanceLocale = {
    lessThanXSeconds: "{{count}}s",
    xSeconds: "{{count}}s",
    halfAMinute: "30s",
    lessThanXMinutes: "{{count}}m",
    xMinutes: "{{count}}m",
    aboutXHours: "{{count}}h",
    xHours: "{{count}}h",
    xDays: "{{count}}d",
    aboutXWeeks: "{{count}}w",
    xWeeks: "{{count}}w",
    aboutXMonths: "{{count}}m",
    xMonths: "{{count}}m",
    aboutXYears: "{{count}}y",
    xYears: "{{count}}y",
    overXYears: "{{count}}y",
    almostXYears: "{{count}}y",
};

const formatDistance: FormatDistanceFn = (token, count, options) => {
    options = options || {};

    const result = formatDistanceLocale[token].replace("{{count}}", count.toString());

    if (options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }

    return result;
};

const Attribution: Component<{ card: Card }> = (props) => {
    const logoUrl = () => {
        const url = new URL(props.card.provider.logoUrl);
        url.searchParams.set("h", "600");
        url.searchParams.delete("w");
        url.searchParams.delete("q");
        return url.toString();
    };

    const publishDate = () => {
        const date = new Date(props.card.publishedDateTime);
        return isAfter(date, subDays(new Date(), 7))
            ? ` · ${formatDistanceToNowStrict(date, {
                  locale: {
                      ...locale,
                      formatDistance,
                  },
              })}`
            : "";
    };

    return (
        <div class={styles.attribution}>
            <img class={styles.publisherIcon} src={logoUrl()} />
            <p class={styles.publisherText}>{`${props.card.provider.name}${publishDate()}`}</p>
        </div>
    );
};

export default Attribution;
