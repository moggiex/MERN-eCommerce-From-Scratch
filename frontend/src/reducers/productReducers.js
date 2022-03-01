
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_RESET,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,
    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL,
} from '../constants/productConstants'


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
            // console.log(action.payload)
            // console.log('-----------')
            return { loading: false, error: action.payload }

        // who knows, just return the * state
        default:
            return state

    }
}

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {

    switch (action.type) {

        // We're requesting product
        case 'PRODUCT_DETAILS_REQUEST':
            return { loading: true, ...state }

        // it was successful so send the product back as the payload
        case 'PRODUCT_DETAILS_SUCCESS':
            return { loading: false, product: action.payload }

        // Something shit the bedm so return the payload in the error
        case 'PRODUCT_DETAILS_FAIL':
            return { loading: false, error: action.payload }

        // who knows, just return the * state
        default:
            return state

    }
}