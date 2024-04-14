export type Order = {
    email: string;
    name: string;
    street: string;
    ['postal-code']: number;
    city: string;
    items: string[]
}