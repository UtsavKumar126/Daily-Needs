import React, { useState, useEffect } from "react";
import style from "./styles.module.css";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/features/Cart/CartSlice";
import {
  addToWatchList,
  removeFromWatchList,
} from "../../../Redux/features/Watchlist/WatchlistSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

function ProductCard({ product }) {
  const state = useSelector((state) => state.watchlist);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleAddToCart() {
    if (!localStorage.getItem("id")) {
      toast.error("Login First");
      navigate("/login");
      return;
    }

    if (cart.some((item) => item.id === product.id)) {
      toast.error("Item already present in Cart");
      return;
    }

    dispatch(addToCart(product));
    toast.success("Added to cart");
  }
  return (
    <div className={style.card}>
      <img src={product.thumbnail} className={style.image} alt="" />
      <p className={style.title}>{product.title}</p>
      <p style={{ marginLeft: "0.5rem" }}>
        <span>₹{product.price}</span>
      </p>
      <div className={style.rating}>
        <Rating name="read-only" value={product.rating} readOnly />
        <div className={style.icon}>
          {!state.includes(product) && (
            <span
              onClick={(e) => {
                if (localStorage.getItem("id") && !state.includes(product)) {
                  dispatch(addToWatchList(product)); 
                  toast.success("Added to Watchlist");
                } else {
                  toast.error("Login first");
                  navigate("/login");
                }
              }}
            >
              <StarBorderRoundedIcon
                sx={{
                  color: "green",
                }}
              />
            </span>
          )}
          {state.includes(product) && (
            <span
              onClick={(e) => {
                dispatch(removeFromWatchList(product.id));
                toast.success("Removed from watchlist");
              }}
            >
              <StarRoundedIcon
                sx={{
                  color: "green",
                }}
              />
            </span>
          )}
        </div>
      </div>

      <div className={style.buttonBox}>
        <button className={style.button} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
