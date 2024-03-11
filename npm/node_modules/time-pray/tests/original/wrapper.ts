import { PraytimesOutput } from "../../src/types";
import PrayTimes from "./PrayTimes";
export function OriginalPraytimes(inputs: any): PraytimesOutput {
    const p = new PrayTimes();
    if (inputs.method) p.setMethod(inputs.method);
    if (inputs.params) p.adjust(inputs.params);

    const res = p.getTimes(
        inputs.date,
        [
            inputs.location.latitude,
            inputs.location.longitude,
            inputs.location.elevation,
        ],
        0,
        0,
        "Float",
    );

    return Object.fromEntries(
        Object.entries(res).map(([k, v]) => [
            k,
            v != "-----"
                ? convertToDate(inputs.date, v as number)
                : new Date(NaN),
        ]),
    ) as any;
}

function convertToDate(dateParts: [number, number, number], hours: number) {
    return new Date(
        Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2]) +
            hours * 3600 * 1000,
    );
}
