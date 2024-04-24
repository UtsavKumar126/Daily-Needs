import { createAsyncThunk } from "@reduxjs/toolkit";
import { app } from "../../../Firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const bringToOrders = createAsyncThunk("order/orderActions", async (id) => {
  const db=getFirestore(app)
  try{
    const docRef=doc(db,'orders',id);
    const docSnap=await getDoc(docRef);
    return docSnap.data().orders;
  }
  catch(error){
    console.log(error);
  }
});