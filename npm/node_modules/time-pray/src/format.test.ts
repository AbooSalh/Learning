import { formatTime, format } from "./format"; // Update the path

describe("formatTime", () => {
    it("should correctly format time in Float format", () => {
        const date = new Date("2023-08-09T15:30:00");
        const result = formatTime("Float", date);
        expect(result).toBeCloseTo(15.5, 5); // You can adjust the precision (5 decimal places)
    });

    it("should correctly format time in 12-hour format with AM", () => {
        const date = new Date("2023-08-09T10:15:00");
        const result = formatTime("12h", date);
        expect(result).toMatch(/^10:15 AM$/);
    });

    it("should correctly format time in 12-hour format with PM", () => {
        const date = new Date("2023-08-09T19:45:00");
        const result = formatTime("12h", date);
        expect(result).toMatch(/^7:45 PM$/);
    });

    it("should correctly format time in 24-hour format", () => {
        const date = new Date("2023-08-09T18:45:00");
        const result = formatTime("24h", date);
        expect(result).toMatch(/^18:45$/);
    });

    it('should handle invalid input by returning "invalidTime"', () => {
        const invalidDate = new Date("invalid date");
        const result = formatTime("Float", invalidDate);
        expect(result).toBe("-----");
    });

    it("should correctly handle time with custom timezone", () => {
        const date = new Date("2023-08-09T08:30:00Z");
        const result = formatTime("12h", date, -4); // UTC-4
        expect(result).toMatch(/^4:30 AM$/);
    });

    // Add more test cases to cover different scenarios
});

describe("format", () => {
    test("formats times in 24h format with timezone", () => {
        const times = {
            fajr: new Date("2022-01-01T06:00:00Z"),
            dhuhr: new Date("2022-01-01T12:00:00Z"),
        };

        expect(format(times, "24h", -5)).toEqual({
            fajr: "01:00",
            dhuhr: "07:00",
        });
    });

    test("formats times in 12h format with timezone", () => {
        const times = {
            sunrise: new Date("2022-01-01T07:00:00Z"),
            sunset: new Date("2022-01-01T17:00:00Z"),
        };

        expect(format(times, "12h", 8)).toEqual({
            sunrise: "3:00 PM",
            sunset: "1:00 AM",
        });
    });

    test("returns invalid time for invalid date", () => {
        const times = {
            fajr: new Date("Invalid"),
        };

        expect(format(times, "24h", -5)).toEqual({
            fajr: "-----",
        });
    });

    test("formats all times for valid input", () => {
        const times = {
            imsak: new Date("2022-01-01T05:00:00Z"),
            fajr: new Date("2022-01-01T06:00:00Z"),
            sunrise: new Date("2022-01-01T07:00:00Z"),
            dhuhr: new Date("2022-01-01T12:00:00Z"),
            asr: new Date("2022-01-01T15:00:00Z"),
            sunset: new Date("2022-01-01T17:00:00Z"),
            maghrib: new Date("2022-01-01T18:00:00Z"),
            isha: new Date("2022-01-01T19:00:00Z"),
        };

        expect(Object.keys(format(times, "24h", -5))).toEqual([
            "imsak",
            "fajr",
            "sunrise",
            "dhuhr",
            "asr",
            "sunset",
            "maghrib",
            "isha",
        ]);
    });
});
