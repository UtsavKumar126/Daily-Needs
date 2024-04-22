import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase } from "firebase/database";
import { app } from "../../../Firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

export const bringToCart = createAsyncThunk("cart/cartActions", async (id) => {
  try {
    const db = getFirestore(app);
    const docRef = doc(db, id, "cart");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      if (docSnap.data().cart.length > 0) {
        toast.info("Your Cart has " + docSnap.data().cart.length + " items");
      }
      return docSnap.data().cart;
    }
  } catch (error) {
    console.log(error);
  }
});
