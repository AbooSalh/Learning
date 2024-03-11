import { Params } from "./types";

export const asrFactors = { Standard: { factor: 1 }, Hanafi: { factor: 2 } };

const setting = {
    imsak: { minutes: 10 },
    dhuhr: { minutes: 0 },
    asr: asrFactors.Standard,
    highLats: "NightMiddle",
} satisfies Partial<Params>;

export const defaultParams = {
    maghrib: { minutes: 0 },
    midnight: "Standard",
    ...setting,
} satisfies Partial<Params>;

export const MethodsData = {
    MWL: {
        name: "Muslim World League",
        params: {
            ...defaultParams,
            fajr: { degree: 18 },
            isha: { degree: 17 },
        },
    },
    ISNA: {
        name: "Islamic Society of North America (ISNA)",
        params: {
            ...defaultParams,
            fajr: { degree: 15 },
            isha: { degree: 15 },
        },
    },
    Egypt: {
        name: "Egyptian General Authority of Survey",
        params: {
            ...defaultParams,
            fajr: { degree: 19.5 },
            isha: { degree: 17.5 },
        },
    },
    Makkah: {
        name: "Umm Al-Qura University, Makkah",
        params: {
            ...defaultParams,
            fajr: { degree: 18.5 },
            isha: { minutes: 90 },
        },
    }, // fajr was 19 degrees before 1430 hijri
    Karachi: {
        name: "University of Islamic Sciences, Karachi",
        params: {
            ...defaultParams,
            fajr: { degree: 18 },
            isha: { degree: 18 },
        },
    },
    Tehran: {
        name: "Institute of Geophysics, University of Tehran",
        params: {
            ...defaultParams,
            fajr: { degree: 17.7 },
            isha: { degree: 14 },
            maghrib: { degree: 4.5 },
            midnight: "Jafari",
        },
    }, // isha is not explicitly specified in this method
    Jafari: {
        name: "Shia Ithna-Ashari, Leva Institute, Qum",
        params: {
            ...defaultParams,
            fajr: { degree: 16 },
            isha: { degree: 14 },
            maghrib: { degree: 4 },
            midnight: "Jafari",
        },
    },
} satisfies Record<string, { name: string; params: Params }>;
