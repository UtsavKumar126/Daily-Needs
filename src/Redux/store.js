import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./features/product/productSlice"
import cartReducer from "./features/Cart/CartSlice"
import watchlistReducer from "./features/Watchlist/WatchlistSlice"
import ordersReducer from "./features/orders/ordersSlice"
export const store=configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer,
        watchlist:watchlistReducer,
        orders:ordersReducer
    }
})