import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_CLEAR_ITEMS,
} from '../constants/cartConstants'

import axios from 'axios'

// Added getState to get all the state details
export const addToCart = (id, qty) => async (dispatch, getState) => {

    const { data } = await axios.get(`/api/products/${id}`)

    // console.log('data._id', data._id)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
