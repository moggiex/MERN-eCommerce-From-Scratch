import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers.js'

// reducers
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

// Add any defaults
const initialState = {}

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