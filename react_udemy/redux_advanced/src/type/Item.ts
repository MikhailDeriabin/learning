export type Item = {
    id: string;
    title: string,
    quantity: number,
    total: number,
    price: number
}

export type ProductItemT = {
    description: string
} & Omit<Item, 'total' | 'quantity'>