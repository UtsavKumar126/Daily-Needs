import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase } from "firebase/database";
import { app } from "../../../Firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const bringToCart = createAsyncThunk("cart/cartActions", async (id) => {
  try {
    const db = getFirestore(app)
    const docRef = doc(db, "cart", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().cart;
    }
  } catch (error) {
    console.log(error);
  }
});
