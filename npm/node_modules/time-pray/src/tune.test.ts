import { tune } from "./tune";

const times = {
    fajr: new Date("2022-01-01T06:00:00Z"),
    sunrise: new Date("2022-01-01T07:00:00Z"),
    maghrib: new Date("2022-01-01T18:00:00Z"),
};

test("tunes times by specified amounts", () => {
    const tuner = {
        fajr: 15,
        sunrise: -30,
    };

    expect(tune(tuner, times)).toEqual({
        fajr: new Date("2022-01-01T06:15:00Z"),
        sunrise: new Date("2022-01-01T06:30:00Z"),
        maghrib: new Date("2022-01-01T18:00:00Z"),
    });
});

test("only tunes specified times", () => {
    const tuner = {
        fajr: 15,
    };

    expect(tune(tuner, times)).toEqual({
        fajr: new Date("2022-01-01T06:15:00Z"),
        sunrise: new Date("2022-01-01T07:00:00Z"),
        maghrib: new Date("2022-01-01T18:00:00Z"),
    });
});

test("returns original times if no tuner provided", () => {
    expect(tune({}, times)).toEqual(times);
});
