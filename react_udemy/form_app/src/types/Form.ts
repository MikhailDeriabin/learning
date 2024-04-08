export type Form = {
    name: string;
    song: string;
    songType: string;
    isAgree: boolean;
}

export enum FormField{
    name = 'name',
    song = 'song',
    songType = 'songType',
    isAgree = 'isAgree'
}