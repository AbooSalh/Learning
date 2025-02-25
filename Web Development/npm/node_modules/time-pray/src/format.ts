import { Format, PraytimesOutput } from "./types";
import { fixHour } from "./utils/numbers";

export function format(
    times: Partial<PraytimesOutput>,
    format: Format,
    timezone?: number,
) {
    return Object.fromEntries(
        Object.entries(times).map(([k, v]) => [
            k,
            formatTime(format, v, timezone),
        ]),
    );
}

const invalidTime = "-----";

const timeSuffixes = ["AM", "PM"];
const suffixes = timeSuffixes;

export function formatTime(format: Format, t: Date, timezone?: number) {
    const wz = new Date(t.valueOf() + (timezone || 0) * 60 * 60 * 1000);
    let time =
        typeof timezone === "undefined"
            ? t.getHours() +
              t.getMinutes() / 60 +
              t.getSeconds() / 3600 +
              t.getMilliseconds() / (3600 * 1000)
            : wz.getUTCHours() +
              wz.getUTCMinutes() / 60 +
              wz.getUTCSeconds() / 3600 +
              wz.getUTCMilliseconds() / (3600 * 1000);

    if (isNaN(time)) return invalidTime;
    if (format == "Float") return time;

    time = fixHour(time + 0.5 / 60); // add 0.5 minutes to round
    const hours = Math.floor(time);
    const minutes = Math.floor((time - hours) * 60);
    const suffix = format == "12h" ? suffixes[hours < 12 ? 0 : 1] : "";
    const hour =
        format == "24h" ? twoDigitsFormat(hours) : ((hours + 12 - 1) % 12) + 1;
    return `${hour}:${twoDigitsFormat(minutes)}${suffix ? " " + suffix : ""}`;
}

function twoDigitsFormat(num: number) {
    return num < 10 ? "0" + num : num;
}
