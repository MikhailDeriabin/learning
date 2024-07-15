/**
 * 
 * @param str string to convert to the upper case
 * @returns string in the upper case
 */
export function toUpperCase(str: string) {
    return str.toLocaleUpperCase();
}

export type StringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}
/**
 * 
 * @param str to get info from
 */
export function getStringInfo(str: string): StringInfo {
    return {
        lowerCase: str.toLowerCase(),
        upperCase: str.toLocaleUpperCase(),
        characters: Array.from(str),
        length: str.length,
        extraInfo: {}
    };
}