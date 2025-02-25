export type Method =
    | "MWL"
    | "ISNA"
    | "Egypt"
    | "Makkah"
    | "Karachi"
    | "Tehran"
    | "Jafari";

export type MidnightMethod = "Standard" | "Jafari";

export type HighLatsMethod =
    | "None"
    | "NightMiddle"
    | "OneSeventh"
    | "AngleBased";

export type Params = {
    // sun angle below the horizon or minutes before fajr
    imsak: Degrees | Minutes;
    // sun angle below the horizon to calculate fajr
    fajr: Degrees;
    // minutes after ( or before with negative numbers ) the midday
    dhuhr: Minutes;
    // asr shadow factor
    asr: { factor: number };
    // sun angle below the horizon or minutes after sunset
    maghrib: Degrees | Minutes;
    // sun angle below the horizon or minutes after maghrib
    isha: Degrees | Minutes;
    // midnight calculation method we have two methods ("Jafari" and "Standard")
    midnight: MidnightMethod;
    // adjustment method for higher latitudes if necessary
    highLats: HighLatsMethod;
};

export type Degrees = {
    degree: number;
};

export type Minutes = {
    minutes: number;
};

export type Timenames =
    | "imsak"
    | "fajr"
    | "sunrise"
    | "dhuhr"
    | "asr"
    | "sunset"
    | "maghrib"
    | "isha"
    | "midnight";

export type PraytimesOutput = Record<Timenames, Date>;

export type Location = {
    longitude: number;
    latitude: number;
    elevation?: number;
};

export type Format =
    | "24h" // 24-hour format
    | "12h" // 12-hour format
    | "12hNS" // 12-hour format with no suffix
    | "Float"; // floating point number

export type DateOnly = [number, number, number];
