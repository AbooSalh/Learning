export function dtr(d: number) {
    return (d * Math.PI) / 180.0;
}

export function rtd(r: number) {
    return (r * 180.0) / Math.PI;
}

export function sin(d: number) {
    return Math.sin(dtr(d));
}

export function cos(d: number) {
    return Math.cos(dtr(d));
}

export function tan(d: number) {
    return Math.tan(dtr(d));
}

export function arcsin(d: number) {
    return rtd(Math.asin(d));
}

export function arccos(d: number) {
    return rtd(Math.acos(d));
}

export function arctan(d: number) {
    return rtd(Math.atan(d));
}

export function arccot(x: number) {
    return rtd(Math.atan(1 / x));
}

export function arctan2(y: number, x: number) {
    return rtd(Math.atan2(y, x));
}
