
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

import axios from 'axios';


// duispatch is the action
export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        // get products
        const { data } = await axios.get('/api/products');

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (err) {
        // feck
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payoad: err.message && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}
