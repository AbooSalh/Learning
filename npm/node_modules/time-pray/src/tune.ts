import { PraytimesOutput } from "./types";

export function tune(
    tunner: Partial<Record<keyof PraytimesOutput, number>>,
    times: Partial<PraytimesOutput>,
) {
    return Object.fromEntries(
        Object.entries(times).map(([k, v]) => [
            k,
            new Date(v.getTime() + (tunner[k] || 0) * 60 * 1000),
        ]),
    );
}
