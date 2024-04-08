export type Cart = {
    items: Item[];
}
export type Item = {
    id: string;
    name: string;
    price: number;
    quantity: number;
}