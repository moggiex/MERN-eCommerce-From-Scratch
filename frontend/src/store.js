import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from './reducers/productReducers.js'

//
const reducer = combineReducers({
    productList: productListReducer
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