import { createSlice } from "@reduxjs/toolkit";
import { getDoc, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { app } from "../../../Firebase";
import { bringToCart } from "./CartActions";
import { act } from "react-dom/test-utils";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      return state.map((product) => {
        if (product.id === action.payload) {
          // Create a new object with updated quantity
          return {
            ...product,
            quantity: product.quantity + 1
          };
        }
        // For other products, return them unchanged
        return product;
      });
    },
    decreaseQuantity: (state, action) => {
      return state.map((product) => {
        if (product.id === action.payload) {
          // Create a new object with updated quantity
          return {
            ...product,
            quantity: product.quantity - 1
          };
        }
        // For other products, return them unchanged
        return product;
      });
    },
    
    pushToCart: (state, action) => {
      async function setdata() {
        try {
          const db = getFirestore(app);
          await setDoc(doc(db, "cart", action.payload), {
            name: action.payload,
            cart: [...state],
          });
        } 
        catch (error) {
          console.log(error.message);
        }
      }
      setdata();
      return [];
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(bringToCart.fulfilled,(state,action)=>{
      return action.payload
    })
  }
});

export const { addToCart, removeFromCart, pushToCart,increaseQuantity,decreaseQuantity} = CartSlice.actions;
export default CartSlice.reducer;
