import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase } from "firebase/database";
import { app } from "../../../Firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

export const bringToCart = createAsyncThunk("cart/cartActions", async (id) => {

  const db=getFirestore(app)
  try{
    const docRef=doc(db,'cart',id);
    const docSnap=await getDoc(docRef);
    return docSnap.data().cart;
  }
  catch(error){
    console.log(error);
  }
});
