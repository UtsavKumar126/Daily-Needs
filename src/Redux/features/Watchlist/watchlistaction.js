import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../../Firebase";
import { toast } from "react-toastify";

export const getFromWatchList = createAsyncThunk(
  "dashboard/watchlist",
  async (id) => {
    try {
      const db = getFirestore(app);
      const docRef2 = doc(db, id, "watchlist");
      const docSnap2 = await getDoc(docRef2);

      if (docSnap2.exists()) {
        if(docSnap2.data().watchlist.length>0){
        toast.info("Your Watchlist has "+docSnap2.data().watchlist.length+" items")
        }
        return docSnap2.data().watchlist;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
