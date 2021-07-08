
export interface Product {
    id: number;
    name: string;
    imageURL: string;
    price: number;
    categoryId?: number;
    description: string;
}


export interface CartProduct extends Product {
    qty: number;
}

export interface Category {
    id: number;
    categoryName: string;
    description: string;
    imageURL?: string;
    products: Product[]
}