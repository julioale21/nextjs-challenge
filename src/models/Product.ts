
type Sku = {
    code: string,
    name: string,
}

type Stock = {
    code: string,
    stock: number,
    price: number,
    name: string,
}

export type Product = {
    id?: number | string | undefined,
    brand?: string,
    image?: string,
    style?: string,
    substyle?: string,
    abv?: string,
    origin?: string,
    information?: string,
    skus?: Sku[],
    stocks?: Stock[],
}