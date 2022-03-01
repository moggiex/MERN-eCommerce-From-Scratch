import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_CLEAR_ITEMS,
} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {

    switch (action.type) {

        case CART_ADD_ITEM:

            console.log('state.cartItems', state.cartItems)

            // get the item sent
            const item = action.payload;
            // console.log('item', item)

            // make sure we won't have a duplciate
            const existItem = state.cartItems.find((x) => x.product === item.product)

            const newCartItems = (state.cartItems.map((x) => (x.product === existItem.product ? item : x)))
            console.log('state.cartItems', state.cartItems)

            if (existItem) {
                return {
                    ...state,
                    cartItems: newCartItems

                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }

        case CART_REMOVE_ITEM:
            // strip out the sent product id
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }

        default:
            return state;
    }

}