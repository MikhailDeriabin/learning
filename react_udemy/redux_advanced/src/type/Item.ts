export type Item = {
    title: string,
    quantity: number,
    total: number,
    price: number
}

export type ProductItemT = {
    description: string
} & Omit<Item, 'total' | 'quantity'>