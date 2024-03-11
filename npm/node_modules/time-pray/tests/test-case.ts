import { DateOnly, Location, Params, Timenames } from "../src/types";

export type TestCase = {
    inputs: {
        params: Params;
        date: DateOnly;
        location: Location;
    };

    originalOutput: Record<Timenames, Date>;
};
