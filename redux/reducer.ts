import actionTypes from "./actionTypes";
import { State, Action } from "../schemas/redux.schema";
import { CartProduct, Category, Product } from "../schemas/product.schema";

const cartItems: CartProduct[] = []
const allItems: Product[] = []
const allCategoryItems: Category[] = []
const categories: string[] = []
export const emptyProduct = {
    id: -1,
    name: "Empty Object",
    imageURL: "Empty Object",
    description: "Empty Object",
    price: -1,
    category: "Empty Object"
}

const INITIAL_STATE = {
    category: 'all',
    cartItems: [ ...cartItems ],
    detailsProduct: emptyProduct,
    allItems: [ ...allItems ],
    allCategoryItems: [ ...allCategoryItems ],
    categories: [ ...categories ],
    toastInfo: {
        isToastOpen: false,
        isCartAction: false,
        toastMessage: "",
        toastProduct: emptyProduct,
    },
}

const reducer = ( state = INITIAL_STATE, action: Action ) =>
{
    switch ( action.type )
    {
        case actionTypes.SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.find( item => item.id === action.payload.id ) ? state.cartItems.map( item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item ) : [ ...state.cartItems, { ...action.payload, qty: 1 } ]
            }
        case actionTypes.SET_CART_EMPTY:
            return {
                ...state,
                cartItems: [ ...cartItems ]
            }
        case actionTypes.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter( item => item.id !== action.payload )
            }
        case actionTypes.SET_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map( item => item.id === action.payload.itemId ? { ...item, qty: item.qty + action.payload.qty } : item )
            }
        case actionTypes.SET_DETAILS_PRODUCT:
            return {
                ...state,
                detailsProduct: action.payload,
            }
        case actionTypes.OPEN_TOAST:
            return {
                ...state,
                toastInfo: {
                    isToastOpen: true,
                    isCartAction: action.payload.isCartAction,
                    toastProduct: action.payload.isCartAction ? action.payload.toastProduct : emptyProduct,
                    toastMessage: action.payload.isCartAction ? "Item is added to cart!" : action.payload.toastMessage,
                }
            }
        case actionTypes.CLOSE_TOAST:
            return {
                ...state,
                toastInfo: {
                    isToastOpen: false,
                    isCartAction: false,
                    toastMessage: "",
                    toastProduct: emptyProduct,
                },
            }
        case actionTypes.SET_ITEMS:
            let items = []
            let categoriesArr = []
            action.payload.map(
                ( category: Category ) =>
                {
                    categoriesArr.push( category.categoryName )
                    items.push( ...category.products )
                }
            )
            return {
                ...state,
                allCategoryItems: action.payload,
                allItems: [ ...items ],
                categories: [ ...categoriesArr ]
            }
        default:
            return state

    }
}

export default reducer