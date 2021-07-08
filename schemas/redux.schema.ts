import { CartProduct, Category, Product } from "./product.schema";

export interface Action {
    type: string,
    payload: any
}
export interface ToastInfo {
    isToastOpen: boolean,
    isCartAction: boolean,
    toastProduct: Product,
    toastMessage: string
}
export interface ToastInfoAction {
    isToastOpen?: boolean,
    isCartAction: boolean,
    toastProduct?: Product,
    toastMessage?: string
}
export interface State {
    category: string,
    cartItems: CartProduct[],
    detailsProduct: Product,
    toastInfo: ToastInfo,
    categories: string[],
    allCategoryItems: Category[],
    allItems: Product[]
}
