import actionTypes from './actionTypes'
import { Action, ToastInfoAction } from '../schemas/redux.schema'
import { Category, Product } from '../schemas/product.schema'

export const setCategory = ( categoryName: string ): Action => ( {
    type: actionTypes.SET_CATEGORY,
    payload: categoryName
} )

export const addToCart = ( item: Product ): Action => ( {
    type: actionTypes.ADD_TO_CART,
    payload: item
} )
export const setCartEmpty = (): Action => ( {
    type: actionTypes.SET_CART_EMPTY,
    payload: null
} )
export const deleteFromCart = ( itemId: number ): Action => ( {
    type: actionTypes.DELETE_FROM_CART,
    payload: itemId
} )
export const setQuantity = ( itemId: number, qty: number ): Action => ( {
    type: actionTypes.SET_QUANTITY,
    payload: { itemId, qty }
} )

export const setDetailsProduct = ( detailsProduct: Product ): Action => ( {
    type: actionTypes.SET_DETAILS_PRODUCT,
    payload: detailsProduct
} )
export const openToast = ( toastInfo: ToastInfoAction ): Action => ( {
    type: actionTypes.OPEN_TOAST,
    payload: toastInfo
} )

export const closeToast = (): Action => ( {
    type: actionTypes.CLOSE_TOAST,
    payload: null,
} )

export const setItems = ( categoryItems: Category[] ): Action => ( {
    type: actionTypes.SET_ITEMS,
    payload: categoryItems
} )

