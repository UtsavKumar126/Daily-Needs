import { createSlice } from "@reduxjs/toolkit";
import { getDoc, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { app } from "../../../Firebase";
import { bringToOrders } from "./orderActions";

const initialState=[];

const orderSlice=createSlice({
    name:'orders',
    initialState:initialState,
    reducers:{
        addToOrders:(state,action)=>{
            console.log([...state,action.payload]);
            return [...state,action.payload]
        },
        pushToOrders: (state, action) => {
            async function setdata() {
              try {
                const db = getFirestore(app);
                await setDoc(doc(db,'orders',action.payload), {
                  name: action.payload,
                  orders: [...state],
                });
              } 
              catch (error) {
                console.log(error.message);
              }
            }
            setdata();
            return[];
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(bringToOrders.fulfilled,(state,action)=>{
          console.log(action.payload);  
          return action.payload
        })
    }


})

export const{pushToOrders,addToOrders} = orderSlice.actions
export default orderSlice.reducer