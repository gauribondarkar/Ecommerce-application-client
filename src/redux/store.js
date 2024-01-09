import {configureStore} from "@reduxjs/toolkit"
import categoryReducer from './slices/categorySlice'
import collectionReducer from './slices/collectionSlice'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        categoryReducer,
        collectionReducer,
        productReducer,
        cartReducer
    }
});