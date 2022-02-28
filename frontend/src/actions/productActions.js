import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants.js'
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
