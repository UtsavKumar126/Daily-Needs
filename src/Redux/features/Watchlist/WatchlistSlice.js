import { createSlice } from "@reduxjs/toolkit";
import { getFromWatchList } from "./watchlistaction";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { app } from "../../../Firebase";

const intitalState=[];

const WatchListSlice=createSlice({
    name:'watchlist',
    initialState:intitalState,
    reducers:{
        addToWatchList:(state,action)=>{
            return [...state,action.payload]
        },
        removeFromWatchList:(state,action)=>{
            return state.filter((product)=>product.id!==action.payload)
        },
        pushToWatchList: (state, action) => {
            async function setdata() {
              try {
                const db = getFirestore(app);
                await setDoc(doc(db,action.payload,'watchlist'), {
                  name: action.payload,
                  watchlist: [...state],
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
        builder.addCase(getFromWatchList.fulfilled,(state,action)=>{
            return action.payload
        })
    }
})

export const{addToWatchList,removeFromWatchList,pushToWatchList}=WatchListSlice.actions
export default WatchListSlice.reducer