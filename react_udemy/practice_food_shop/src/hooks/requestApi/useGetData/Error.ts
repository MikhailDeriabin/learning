export class RequestError implements Error {
    constructor(
        public readonly code: ErrorType,
        public readonly message: string,
        public readonly e: any
    ){
    }
}

export interface Error {
    readonly code: ErrorType;
    readonly message: string;
    readonly e: any;
}

export enum ErrorType {
    BAD_REQUEST,
    NOT_AUTHENTICATED,
    NOT_AUTHORIZED,
    NOT_FOUND,
    NO_RESPONSE,
    UNEXPECTED
}