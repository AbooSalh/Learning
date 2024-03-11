import { DateOnly } from "./types";

export function getDatePartsUTC(date: Date): DateOnly {
    return [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()];
}

export function today(): DateOnly {
    const date = new Date();
    return getDatePartsLocal(date);
}
export function getDatePartsLocal(date: Date): DateOnly {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}
