import { DateOnly, Location } from "../types";

export function toJulianDate(date: DateOnly, location: Location) {
    return julian(date[0], date[1], date[2]) - location.longitude / (15 * 24);
}
// convert Gregorian date to Julian day
// Ref: Astronomical Algorithms by Jean Meeus
function julian(year: number, month: number, day: number) {
    if (month <= 2) {
        year -= 1;
        month += 12;
    }
    const A = Math.floor(year / 100);
    const B = 2 - A + Math.floor(A / 4);

    const JD =
        Math.floor(365.25 * (year + 4716)) +
        Math.floor(30.6001 * (month + 1)) +
        day +
        B -
        1524.5;
    return JD;
}
