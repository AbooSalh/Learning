export function fixAngle(a: number) {
    return fix(a, 360);
}

export function fixHour(a: number) {
    return fix(a, 24);
}

export function fix(a: number, b: number) {
    a = a - b * Math.floor(a / b);
    return a < 0 ? a + b : a;
}
