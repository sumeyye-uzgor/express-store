
export interface Product {
    id: number;
    name: string;
    imageURL: string;
    price: number;
    categoryId: number;
    description: string;
}

// export interface DetailsProduct extends Product {
//     description: string;
// }

export interface CartProduct extends Product {
    qty: number;
}