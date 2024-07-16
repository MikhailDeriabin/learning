export class StringUtils{
    /**
    * 
    * @param str string to convert to the upper case
    * @returns string in the upper case
    */
    public toUpperCase(str: string) {
        if(!str)
            throw new Error('Invalid argument');
        return str.toLocaleUpperCase();
    } 
}