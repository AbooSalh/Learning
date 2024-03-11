import { methods, Params } from "../src";
import {
    DateOnly,
    Degrees,
    HighLatsMethod,
    Location,
    Method,
    MidnightMethod,
    Minutes,
} from "../src/types";
import fs from "fs";
import { OriginalPraytimes } from "./original/wrapper";
import { TestCase } from "./test-case";

export function convertParamsToOld(params: Params): Record<keyof Params, any> {
    return {
        asr: params.asr.factor,
        fajr: params.fajr.degree,
        isha: toOld(params.isha),
        dhuhr: toOld(params.dhuhr),
        imsak: toOld(params.imsak),
        maghrib: toOld(params.maghrib),
        highLats: params.highLats,
        midnight: params.midnight,
    };
}

function toOld(o: Degrees | Minutes) {
    if ("minutes" in o) {
        return `${o.minutes} min`;
    } else return o.degree;
}
type City = {
    id: string;
    name: string;
    state_id: string;
    state_code: string;
    state_name: string;
    country_id: string;
    country_code: string;
    country_name: string;
    latitude: string;
    longitude: string;
    wikiDataId: string;
};
const citiesData: City[] = JSON.parse(
    fs.readFileSync("./assets/cities-all.json", "utf8"),
);
function getRandomLocation(): Location {
    let longitude = Math.random() * 360 - 180,
        latitude = Math.random() * 180 - 90;
    if (Math.random() > 0.5) {
        const city = citiesData[Math.floor(Math.random() * citiesData.length)];
        longitude = +city.longitude;
        latitude = +city.latitude;
    }
    return {
        longitude,
        latitude,
        elevation: Math.random() > 0.9 ? undefined : Math.random() * 1000,
    };
}

function main() {
    const result: TestCase[] = [];
    for (let i = 0; i < 10000; i++) {
        const inputs = randomInputGenerator();
        const originalOutput = OriginalPraytimes({
            location: inputs.location,
            params: convertParamsToOld(inputs.params),
            date: inputs.date,
        });
        result.push({ inputs, originalOutput });
    }
    fs.writeFileSync("./assets/test-data.json", JSON.stringify(result));
}
main();

function randomInputGenerator(): {
    params: Params;
    location: Location;
    date: DateOnly;
} {
    const date = getRandomDate(new Date("1900-1-1"), new Date("2100-1-1"));
    const dateOnly: DateOnly = [
        date.getUTCFullYear(),
        date.getUTCMonth() + 1,
        date.getUTCDate(),
    ];
    return {
        params:
            Math.random() > 0.5
                ? getRandomParameters()
                : methods[getRandomMethod()],
        location: getRandomLocation(),
        date: dateOnly,
    };
}
function getRandomParameters(): Params {
    const imsak = getRandomCalculationUnit([18, 25], [10, 20]);
    const fajr = getRandomDegrees([18, 25]);
    const dhuhr = getRandomMinutes([-4, 4]);
    const asr = getRandomAsrFactor([1, 2]);
    const maghrib = getRandomCalculationUnit([3, 5], [0, 20]);
    const isha = getRandomCalculationUnit([10, 20], [50, 120]);
    const midnight = getRandomMidnightMethod();
    const highLatitudes = getRandomHighLatsMethod();
    return {
        imsak,
        fajr,
        dhuhr,
        asr,
        maghrib,
        isha,
        midnight,
        highLats: highLatitudes,
    };
}

type Range = [number, number];
function getRandomCalculationUnit(
    degreeRange: Range,
    minutesRange: Range,
): Degrees | Minutes {
    if (Math.random() < 0.5) {
        return getRandomDegrees(degreeRange);
    } else {
        return getRandomMinutes(minutesRange);
    }
}
function getRandomDegrees([min, max]: Range): Degrees {
    return {
        degree: Math.random() * (max - min) + min,
    };
}
function getRandomMinutes([min, max]: Range): Minutes {
    return {
        minutes: Math.random() * (max - min) + min,
    };
}

function getRandomAsrFactor([min, max]: Range): { factor: number } {
    return {
        factor: Math.random() * (max - min) + min,
    };
}

function getRandomHighLatsMethod(): HighLatsMethod {
    const methods: HighLatsMethod[] = [
        "None",
        "NightMiddle",
        "OneSeventh",
        "AngleBased",
    ];

    return methods[Math.floor(Math.random() * methods.length)];
}
function getRandomMidnightMethod(): MidnightMethod {
    return Math.random() < 0.5 ? "Standard" : "Jafari";
}

function getRandomMethod() {
    const methods: Method[] = [
        "MWL",
        "ISNA",
        "Egypt",
        "Makkah",
        "Karachi",
        "Tehran",
        "Jafari",
    ];
    // return "Tehran";
    return methods[Math.floor(Math.random() * methods.length)];
}
function getRandomDate(start: Date, end: Date) {
    const startDate = start.getTime();
    const endDate = end.getTime();
    const randomTime = Math.random() * (endDate - startDate) + startDate;
    return new Date(randomTime);
}
