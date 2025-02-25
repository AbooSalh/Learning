import * as DMath from "./degree-math";
import { fixAngle, fixHour } from "./numbers";

// compute declination angle of sun and equation of time
// Ref: http://aa.usno.navy.mil/faq/docs/SunApprox.php
export function sunPosition(jd: number) {
    const D = jd - 2451545.0;
    const g = fixAngle(357.529 + 0.98560028 * D);
    const q = fixAngle(280.459 + 0.98564736 * D);
    const L = fixAngle(q + 1.915 * DMath.sin(g) + 0.02 * DMath.sin(2 * g));

    const e = 23.439 - 0.00000036 * D;

    const RA = DMath.arctan2(DMath.cos(e) * DMath.sin(L), DMath.cos(L)) / 15;
    const eqt = q / 15 - fixHour(RA);
    const decl = DMath.arcsin(DMath.sin(e) * DMath.sin(L));

    return { declination: decl, equation: eqt };
}
