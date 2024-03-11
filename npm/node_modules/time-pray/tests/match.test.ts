import fs from "fs/promises";
import { getPrayerCalculator } from "../src";
import { TestCase } from "./test-case";

it(`should match with the original code`, async () => {
    const data: TestCase[] = await readTestData();

    for (const testCase of data) {
        const {
            inputs: { params, location, date },
            originalOutput,
        } = testCase;
        const calculator = getPrayerCalculator(params);

        const praytimes = calculator(location, date);
        assertPraytimes(originalOutput, praytimes);
    }
});
async function readTestData(): Promise<TestCase[]> {
    return JSON.parse(await fs.readFile("./assets/test-data.json", "utf8")).map(
        ({ inputs: { params, location, date }, originalOutput }) => ({
            inputs: { params, location, date: date },
            originalOutput: Object.fromEntries(
                Object.entries(originalOutput).map(([k, v]: any) => [
                    k,
                    v === null ? new Date(NaN) : new Date(v),
                ]),
            ),
        }),
    );
}

function assertPraytimes(original: any, newtimes: any) {
    for (const key in original) {
        if (isNaN(original[key])) expect(newtimes[key].getTime()).toBeNaN();
        else {
            expect(newtimes[key].getTime()).toBeCloseTo(
                original[key].getTime(),
                -2,
            );
        }
    }
}
