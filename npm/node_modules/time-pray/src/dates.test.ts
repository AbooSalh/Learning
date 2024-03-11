import { getDatePartsLocal, getDatePartsUTC, today } from "./dates";

describe("today", () => {
    const RealDate = Date;

    function mockDate(isoDate: Date) {
        global.Date = class extends RealDate {
            constructor() {
                super();
                return new RealDate(isoDate);
            }
        } as any;
    }

    afterEach(() => {
        global.Date = RealDate;
    });

    it("should return the correct Date", () => {
        const date = new Date("2022-11-01");
        mockDate(date);
        expect(today()).toEqual([2022, 11, 1]);
    });
});

describe("getDatePartsUTC", () => {
    it("returns correct year, month, day", () => {
        const date = new Date("2020-02-15T11:22:33Z");
        const [year, month, day] = getDatePartsUTC(date);

        expect(year).toBe(2020);
        expect(month).toBe(2);
        expect(day).toBe(15);
    });

    it("handles single digit month and day", () => {
        const date = new Date("2020-01-05T11:22:33Z");
        const [year, month, day] = getDatePartsUTC(date);

        expect(year).toBe(2020);
        expect(month).toBe(1);
        expect(day).toBe(5);
    });
});

describe("getDatePartsLocal", () => {
    it("returns correct year, month, day in local timezone", () => {
        const date = new Date("2020-02-15T06:22:33-05:00");
        const [year, month, day] = getDatePartsLocal(date);

        expect(year).toBe(2020);
        expect(month).toBe(2);
        expect(day).toBe(15);
    });
});
