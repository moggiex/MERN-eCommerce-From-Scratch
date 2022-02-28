import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants.js'


export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {

        // We're requesting products
        case 'PRODUCT_LIST_REQUEST':
            return { loading: true, products: [] }

        // it was successful so send the products back as the payload
        case 'PRODUCT_LIST_SUCCESS':
            return { loading: false, products: action.payload }

        // Something shit the bedm so return the payload in the error
        case 'PRODUCT_LIST_FAIL':
            return { loading: false, error: action.payload }

        // who knows, just return the * state
        default:
            return state

    }
}