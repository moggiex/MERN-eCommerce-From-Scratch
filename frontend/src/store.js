import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers.js'
import { cartReducer } from './reducers/cartReducers.js';

// reducers
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

// Add any defaults or from local storage

// get cart items from the local storage (set when an item is added to the cart)
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

// console.log(`cartItemsFromStorage`, cartItemsFromStorage)

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
}

// console.log(initialState)

// Add any middleware
const middleware = [thunk]

// create store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            ...middleware
        )
    ))

export default store