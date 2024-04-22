import { createAsyncThunk } from "@reduxjs/toolkit";
import { app } from "../../../Firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const bringToOrders = createAsyncThunk("cart/cartActions", async (id) => {
  try {
    const db = getFirestore(app);
    const docRef3 = doc(db, id, "orders");
    const docSnap3 = await getDoc(docRef3);
    if (docSnap3.exists()) {
      console.log(docSnap3.data().orders);
      return docSnap3.data().orders;
    }
  } catch (error) {
    console.log(error);
  }
});