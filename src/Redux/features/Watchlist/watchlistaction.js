import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../../Firebase";
import { toast } from "react-toastify";

export const getFromWatchList = createAsyncThunk(
  "dashboard/watchlist",
  async (id) => {
  const db=getFirestore(app)
  try{
    const docRef=doc(db,'watchlist',id);
    const docSnap=await getDoc(docRef);
    return docSnap.data().watchlist;
  }
  catch(error){
    console.log(error);
  }
  }
);
