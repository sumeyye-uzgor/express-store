
export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    category: string;
    description: string;
}

// export interface DetailsProduct extends Product {
//     description: string;
// }

export interface CartProduct extends Product {
    qty: number;
}