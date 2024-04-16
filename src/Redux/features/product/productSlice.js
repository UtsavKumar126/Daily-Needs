import {createSlice} from "@reduxjs/toolkit"
import { getProducts } from "./productAction"

const intialState={
    loading:false,
    products:[],
    error:""
}
const productSlice=createSlice({
    name:"product",
    initialState:intialState,
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products=action.payload;
        })
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    }
})
export default productSlice.reducer