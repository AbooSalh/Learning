# time-pray

Prayer Times Calculator for JavaScript Based on [Praytimes.org](https://praytimes.org).

This is a refactor of the original Praytimes.org source code to make it more usable with npm and JavaScript. The output formats have also been updated - see Output Philosophy section for more details.

## Installation

Install with npm:

```
npm install time-pray
```

#### Calculation Methods

Supported methods:

-   MWL - Muslim World League
-   ISNA - Islamic Society of North America
-   Egypt - Egyptian General Authority of Survey
-   Makkah - Umm al-Qura, Makkah
-   Karachi - University of Islamic Sciences, Karachi
-   Tehran - Institute of Geophysics, University of Tehran
-   Jafari - Shia Ithna Ashari, Leva Institute, Qum

## Usage

Import the functions:

```js
import { getPrayerCalculator, methods } from "time-pray";
```

Create calculator:

```js
const calculator = getPrayerCalculator(methods.MWL);
```

Get prayer times:

```js
const times = calculator(
    {
        longitude: -0.1,
        latitude: 51.5,
    },
    today(), // or getDatePartsUTC(new Date("2022-11-12")) or [2022,11,12]
);
```

Output times:

```js
for (const time of Object.keys(times)) {
    console.log(times[time].toISOString());
}
```

## Configuration

For most users the already implemented calculation methods are enough, for example:

```ts
let calculator = getPrayerCalculator(methods.Jafari); // create a calculator based on Jafari method's parameters
```

**Warning:** these parameters aren't meant to be used as a way of tuning times for precaution - there is another function for this purpose (see [tuning](#tuning))!

But if you want more advanced usage, you can provide your own calculation parameters. The default method is MWL. Anything else will override it. For details see [Praytimes Manual](http://praytimes.org/manual).

### Example Configuration

```ts
const params: Params = {
    imsak: { minutes: 10 },
    fajr: { degree: 18 },
    dhuhr: { minutes: 0 },
    asr: { factor: 1 },
    maghrib: { minutes: 0 },
    isha: { degree: 17 },
    midnight: "Standard",
    highLats: "NightMiddle",
};
```

Here is a description of the parameters:

### imsak

-   Type: `Degrees | Minutes`
-   Default: `{minutes: 10}`

The sun angle below horizon or minutes before Fajr for Imsak time.

### fajr

-   Type: `Degrees`
-   Default: `{degree: 18}`

The sun angle below horizon to use for Fajr time. In degrees.

### dhuhr

-   Type: `Minutes`
-   Default: `{minutes: 0}`

The minutes after (or before with negative) midday for Dhuhr.

### asr

-   Type: `{factor: number}`
-   Default: `{factor: 1}`

The shadow factor to use for Asr time.

### maghrib

-   Type: `Degrees | Minutes`
-   Default: `{minutes: 0}`

The sun angle below horizon or minutes after sunset for Maghrib.

### isha

-   Type: `Degrees | Minutes`
-   Default: `{degree: 17}`

The sun angle below horizon or minutes after Maghrib for Isha.

### midnight

-   Type: `MidnightMethod` (`"Standard" | "Jafari"`)
-   Default: `"Standard"`

The method for calculating midnight. "Standard" or "Jafari".

### highLats

-   Type: `HighLatsMethod`
-   Default: `"NightMiddle"`

The higher latitude adjustment method. "None", "NightMiddle", "OneSeventh", or "AngleBased".

## API Reference

### getCalculator(settings)

Creates a prayer time calculator initialized with given settings.

Returns a function that can be called to get prayer times by passing location and date.

#### calculator(location, date)

Given a location and date, computes prayer times.

-   `location` - Object with latitude and longitude
-   `date` - JavaScript Date object

Returns an object with prayer times mapped to time names. Prayer times are Date objects.

Time names:

-   imsak
-   fajr
-   sunrise
-   dhuhr
-   asr
-   sunset
-   maghrib
-   isha
-   midnight

### tuning

You can tune times for precaution using the tune method:

```js
import { tune } from "time-pray";

// Calculate times
const tunedTimes = tune({ fajr: -3 }, times);
```

The first parameter is a map of pray times to a number of minutes to adjust the time.

For example:

```js
{
  fajr: 2023-08-10T08:17:23.544Z,
  // ...
}
```

Becomes:

```js
{
  fajr: 2023-08-10T08:14:23.544Z,
  // ...
}
```

### Formatting

#### Format

Formats prayer times into a desired format.

```js
format(times, format, timezone?)
```

Parameters:

-   `times` (PraytimesOutput) - Times object to format
-   `format` (Format) - Format preset. Options:
    -   "24h" - 24 hour
    -   "12h" - 12 hour with AM/PM
    -   "12hNS" - 12 hour with no suffix
    -   "Float" - Floating point hours
-   `timezone` (number) - Optional UTC offset in hours

Returns: Object with formatted times.

Example:

```js
const formatted = format(
    {
        fajr: new Date("2023-03-01T13:15:00Z"),
        dhuhr: new Date("2023-03-01T20:30:00Z"),
        asr: new Date("2023-03-02T00:45:00Z"),
    },
    "12h",
    -8,
);

// {
//   fajr: "5:15AM",
//   dhuhr: "12:30PM",
//   asr: "4:45PM"
// }
```

#### formatTime

Formats a Date object into a time string.

```js
formatTime(format, date, timezone?)
```

Parameters:

-   `format` (Format) - Format preset
-   `date` (Date) - Date to format
-   `timezone` (number) - Optional UTC offset in hours

Returns: (string) - Formatted time string

Example:

```js
formatTime("24h", new Date());
```

### Date functions

#### getDatePartsUTC

Returns an array of [year, month, day] representing the UTC date.

```js
getDatePartsUTC(date);
```

Parameters:

-   `date` (Date) - Input date

Returns: (Number[]) - Array of [year, month, day]

Example:

```js
getDatePartsUTC(new Date());
```

#### today

Returns the current date as an array of [year, month, day] in the local timezone.

```js
today();
```

Returns: (Number[]) - Array of [year, month, day]

#### getDatePartsLocal

Returns an array of [year, month, day] representing the date in the local timezone.

```js
getDatePartsLocal(date);
```

Parameters:

-   `date` (Date) - Input date

Returns: (Number[]) - Array of [year, month, day]

Example:

```js
getDatePartsLocal(new Date());
```

## Output Philosophy

The original code output prayer times as strings (e.g. '12:20').

This package outputs Date objects, which better represent prayer times as absolute moments in time, independent of timezone.

The format utility can be used to convert to strings as needed:

```js
import { format } from "time-pray";

const formattedTimes = format(times);
```

## Tests

Tests enforce accuracy within 50ms of original Praytimes.org calculations using a dataset of 150,000 cities globally. Dates, calculation methods, and parameters are randomly generated for robust testing.

The codebase is **100%** covered by unit tests.

To run tests and view coverage:

```
npm run test:cov
```

This will execute the test suite and generate a coverage report.

Results:

```
 PASS  src/tune.test.ts
 PASS  src/format.test.ts
 PASS  tests/match.test.ts (85.119 s)
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |    93.1 |     100 |
 calculator.ts  |     100 |      100 |     100 |     100 |
 format.ts      |     100 |      100 |     100 |     100 |
 index.ts       |     100 |      100 |       0 |     100 |
 method-data.ts |     100 |      100 |     100 |     100 |
 methods.ts     |     100 |      100 |     100 |     100 |
 tune.ts        |     100 |      100 |     100 |     100 |
----------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        85.388 s
Ran all test suites.
Done in 85.65s.
```

## Credits

PrayTimes.js is based on [PrayTimes](http://praytimes.org). Cities dataset from [countries-states-cities-database](https://github.com/dr5hn/countries-states-cities-database).

## License

GNU GPL v3.0 - see LICENSE
