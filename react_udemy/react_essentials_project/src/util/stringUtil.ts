export function isNumber(value: string) {
    return value.match(/^[0-9]+$/) || value.match(/[+-]?([0-9]*[.])?[0-9]+/);
}

export function parseToInt(value: string) {
    return isNumber(value) ? parseInt(value) : null;
}

export function parseToFloat(value: string) {
    return isNumber(value) ? parseFloat(value) : null;
}