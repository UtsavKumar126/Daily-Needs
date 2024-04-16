import { createAsyncThunk } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk("store/product", async () => {
  return fetch("https://dummyjson.com/products?limit=100")
    .then((resp) => resp.json())
    .then((data) => data);
});
