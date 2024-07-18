import { v4 } from "uuid"


export type StringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

/**
 * Determine the complexity of the provided string 
 *
 * @param stringInfo 
 * @returns string complexity
 */
export function calculateComplexity(stringInfo: StringInfo) {
    return Object.keys(stringInfo.extraInfo ?? {}).length * stringInfo.length;
}


type CallbackFn = (str: string) => void;
/**
 * Convert string to upper case 
 *
 * @param str string to convert
 * @param onInvalidArg callback if str is not valid
 * @returns upper case string or nothing if str is invalid 
 */
export function toUpperWithCallback(str: string, onInvalidArg: CallbackFn) {
    if(!str){
        onInvalidArg('Invalid str');
        return;
    }
    onInvalidArg('OK');

    return str.toUpperCase();
}

export class OtherUtils {
    /**
    * 
    * @param str string to convert to the upper case
    * @returns string in the upper case
    */
    public toUpperCase(str: string) {
        return str.toUpperCase();
    } 

    /**
    * Log the provided string 
    *
    * @param str to log
    * 
    */
    public logString(str: string) {
        console.log(str);
    }


    /**
    * Make some external API call
    * 
    */
    public externalResourceCall(): string | null {
        const resp = 'Some API call, that we do not want to do';
        console.log(resp);

        return resp ?? null; 
    } 
}

export function toUpperCase(str: string) {
    return str.toUpperCase();
}
export function toLowerCaseAndAddRandomId(str: string) {
    return str.toLowerCase() + v4();
}